export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UserRemovedEvent } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { UserSearchReport } from '../../Reports/Entities/User'

@EventsHandler(UserRemovedEvent)
export class UserRemovedEventHandler implements IEventHandler<UserRemovedEvent>
{

    async handle(event: UserRemovedEvent): Promise<void> {
        let user = new UserSearchReport(event.Id);
        

        
        await FirebaseRepository.Put(user);
        return;
    }
}