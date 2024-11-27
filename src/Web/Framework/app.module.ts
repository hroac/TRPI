import { Module } from '@nestjs/common';
import { CommandHandlers } from '../../CommandHandlers'
import { EventHandlers } from '../../EventHandlers/index'
import { Repository } from '../../CommandHandlers/Framework'
import { BaseModule } from './base.module';
import { CqrsModule } from '@nestjs/cqrs'


@Module({
    imports: [BaseModule],
})
export class AppModule {

}

