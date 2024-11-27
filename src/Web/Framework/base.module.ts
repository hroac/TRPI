import { CommandHandlers } from '../../CommandHandlers';
import { EventHandlers } from '../../EventHandlers/index';
import { Repository } from '../../CommandHandlers/Framework';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { FileLogger } from "../../TraumaIndicator/Utilities/FileLogger";
import { CqrsModule } from '@nestjs/cqrs';
import { OnApplicationBootstrap } from '@nestjs/common';
import { Event } from '../../Events';
import { Controllers } from '../Controllers';
import { ApiKeyMiddleware } from './api-key.middleware';  // Ensure this path is correct

@Module({
    imports: [CqrsModule<Event>],
    controllers: Controllers,
    providers: [
        Repository,
        ...CommandHandlers,
        ...EventHandlers
    ]
})
export class BaseModule implements NestModule, OnApplicationBootstrap {
    public log: FileLogger;

    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(ApiKeyMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }

    public onApplicationBootstrap(): void {
        this.log = new FileLogger(`info-${new Date().toISOString().split('T')[0]}-${this.constructor.name}.log`);
        this.log.info('TraumaIndicator module initiated', this);
    }
}
