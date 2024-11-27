export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UserSavedResultsEvent } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { UserSearchReport } from '../../Reports/Entities/User'
import { TestSearchReport } from '../../Reports/Entities/Test'

@EventsHandler(UserSavedResultsEvent)
export class UserSavedResultsEventHandler implements IEventHandler<UserSavedResultsEvent>
{

    async handle(event: UserSavedResultsEvent): Promise<void> {
        let user = new UserSearchReport(event.Id);
        user.TestId = event.Id.toString();

        let test = new TestSearchReport(event.Id);
        test.UserId = (event.UserId as any).value;
        test.Types = event.Types;
        test.Modes = event.Modes;
        test.Answers = event.Answers;
        test.Mode = event.Mode;
        test.Gender = event.Gender;
        test.Date = event.Date;

        
        await FirebaseRepository.Update(user);
        await FirebaseRepository.Put(test);
        return;
    }
}