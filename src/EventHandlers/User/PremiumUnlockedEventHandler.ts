export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { PremiumUnlockedEvent } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { UserSearchReport } from '../../Reports/Entities/User'

@EventsHandler(PremiumUnlockedEvent)
export class PremiumUnlockedEventHandler implements IEventHandler<PremiumUnlockedEvent>
{

    async handle(event: PremiumUnlockedEvent): Promise<void> {
        let user = await FirebaseRepository.Get<UserSearchReport>(event.Id, UserSearchReport) || new UserSearchReport(event.Id);
        user.Premium = true;


        await FirebaseRepository.Put(user);
        return;
    }
}