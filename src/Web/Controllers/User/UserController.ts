import { Controller, Param, Body, Get, Post } from '@nestjs/common';
import { BaseController } from '../../Framework';
import { FirebaseRepository } from '../../../Firebase/FirebaseRepository';
import { Guid } from 'guid-typescript';
import { UserSearchReport } from '../../../Reports/Entities/User';
import { UserModel, PremiumModel, ChatModel } from './UserModel';
import { UserResult, UserPremium, ChatResult } from './UserResult';
import { CreateUserCommand, SaveResultsUserCommand, UnlockPremiumCommand } from '../../../Commands/User';
import { AccountType } from '../../../TraumaIndicator/ValueObjects';
import { SavedResults } from './SavedResults';
import { UserResults } from './UserResults';
//import { ChatGPT } from '../../wwwroot/src/utilities/ChatGPT';
import Stripe from 'stripe';
import { configDotenv } from 'dotenv';
configDotenv({path: '../../../../static'})
interface UserKeyValueReport {
    users: {
        [key: string]: UserSearchReport;
    };
}

@Controller()
export class UserController extends BaseController {
    private stripe: Stripe = new Stripe(process.env.STRIPE_API_KEY || '', {
        apiVersion: '2024-11-20.acacia', // Updated to the latest API version
    });

    private test: any = () => {
        console.log(process.env)
    }

    @Get('/users')
    public async Users(): Promise<UserKeyValueReport> {
        console.log('users');
        const users = await FirebaseRepository.GetMany<UserSearchReport>(UserSearchReport);
        console.log(users)
        return {
            users: users.reduce((acc, user) => {
                acc[user.Id] = user;
                return acc;
            }, {} as { [key: string]: UserSearchReport }),
        };
    }

    @Post('/users/create')
    public AddUser(@Body() model: UserModel): UserResult {
        const user: UserResult = {
            userId: model.userId.toString(),
            name: model.name,
            email: model.email,
            password: model.password,
            role: model.role,
        } as UserResult;

        console.log(user)
        this.commandBus.execute(
            new CreateUserCommand(
                Guid.parse(model.userId),
                model.name,
                model.email,
                model.password,
                AccountType.fromValue(model.role)
            )
        );

        return user;
    }

    @Post('/users/login')
    public async LoginUser(@Body() model: UserModel): Promise<UserResult> {
        const user = await FirebaseRepository.Get<UserSearchReport>(Guid.parse(model.userId), UserSearchReport);
        if (!user) {
            this.commandBus.execute(
                new CreateUserCommand(
                    Guid.parse(model.userId),
                    model.name,
                    model.email,
                    model.password,
                    AccountType.fromValue(model.role)
                )
            );
        }

        return {
            userId: model.userId.toString(),
            name: model.name,
            email: model.email,
            password: model.password,
            premium: user?.Premium ?? false,
            role: model.role,
        } as UserResult;
    }

    @Post('/users/:userId')
    public async GetUserById(@Param('userId') userId: string): Promise<UserResult> {
        const user = await FirebaseRepository.Get<UserSearchReport>(Guid.parse(userId), UserSearchReport);
        if (user) {
            return {
                userId: userId,
                name: user.Name,
                email: user.Email,
                premium: user.Premium,
            } as UserResult;
        }

        return {} as UserResult;
    }

    @Post('/users/email/:email')
    public async GetUserByEmail(@Param('email') email: string): Promise<UserResult> {
        const users = await FirebaseRepository.Search(UserSearchReport, 'Email', email, email);
        const user = users[0]; // Firebase does not support partial match, so we query the exact value

        if (user) {
            return {
                userId: user.Id.toString(),
                name: user.Name,
                email: user.Email,
                premium: user.Premium,
            } as UserResult;
        }

        return {} as UserResult;
    }

    @Post('/users/:userId/save')
    public SaveResults(@Param('userId') userId: string, @Body() model: UserResults): SavedResults {
        this.commandBus.execute(
            new SaveResultsUserCommand(
                Guid.parse(userId),
                model.testId,
                model.types,
                model.modes,
                model.mode,
                model.answers,
                model.gender
            )
        );

        return { userId, testId: (model.testId as any).value } as SavedResults;
    }

    @Post('/users/:userId/premium')
    public async UnlockPremium(@Param('userId') userId: string, @Body() model: PremiumModel): Promise<UserPremium> {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: 299, // Amount in cents
                currency: 'eur',
                payment_method: model.token,
                confirmation_method: 'manual',
                confirm: true,
            });

            if (paymentIntent.status === 'succeeded') {
                this.commandBus.execute(new UnlockPremiumCommand(Guid.parse(userId)));
                return { userId, premium: true } as UserPremium;
            } else {
                throw new Error('Payment failed or requires additional action.');
            }
        } catch (error) {
            console.error('Error processing payment:', error);
            throw error;
        }
    }

    /* @Post('/users/chat/:userId')
    public async Chat(@Param('userId') userId: string, @Body() model: ChatModel): Promise<ChatResult> {
        let chatGpt = ChatGPT.get();
        if (!chatGpt) {
            chatGpt = ChatGPT.set(process.env.OPENAI_KEY ?? '');
        }
        const chat = await chatGpt.getResponse(userId, model.testId, model.message);

        return {
            message: chat,
        };
    } */
}
