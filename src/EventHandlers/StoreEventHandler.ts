export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import {
    AccountCreatedEvent,
    UserCreatedEvent,
    UserSavedResultsEvent,
    PremiumUnlockedEvent,
    Event,
} from '../Events'
import { EventSearchReport } from '../Reports/Entities/eventStore';
import { Guid } from 'guid-typescript';
import { CommandBus } from '@nestjs/cqrs';
import { FirebaseRepository } from '../Firebase/FirebaseRepository';
let cls: { new(id?: Guid, event?: Event): EventSearchReport } = EventSearchReport;



@EventsHandler(
Event,
)
export class StoreEventHandler implements
    IEventHandler<AccountCreatedEvent>,
    IEventHandler<UserSavedResultsEvent>,
    IEventHandler<PremiumUnlockedEvent>,
    IEventHandler<UserCreatedEvent>
{
    public constructor(protected readonly commandBus: CommandBus) {
    }


    async handle(event: AccountCreatedEvent): Promise<void>
    async handle(event: UserSavedResultsEvent): Promise<void>
    async handle(event: PremiumUnlockedEvent): Promise<void>
    async handle(event: UserCreatedEvent): Promise<void>
    async handle(event: Event): Promise<void> {
        event.Id = event.Id.toString() as any as Guid
        let report: EventSearchReport = new cls(Guid.create(), event);
        console.log(event);

        await FirebaseRepository.Put(report);
        return;
    } 

}
    