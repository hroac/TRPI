
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../Commands/User'
import { Repository } from '../Framework'
import { UserSearchReport } from '../../Reports/Entities/User'
import { User } from '../../Domains/User'

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

    async execute(command: CreateUserCommand) {
        const { Id, Name, Email, Password, Role } = command
        const props = await this.repository.Get<UserSearchReport, User>(Id, UserSearchReport, User)
        const domain = this.publisher.mergeObjectContext(props)

        console.log(Id)
        await domain.createUser(Name, Email, Password, Role);
        await domain.commit();
        return;

    }
}