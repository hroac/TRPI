export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UserCreatedEvent } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { UserSearchReport } from '../../Reports/Entities/User'

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent>
{

    async handle(event: UserCreatedEvent): Promise<void> {
        let user = new UserSearchReport(event.Id);
        user.Name = event.Name;
        user.Email = event.Email;
        user.Password = event.Password;
        user.Role = event.Role;

        
        await FirebaseRepository.Put(user);
        return;
    }
}