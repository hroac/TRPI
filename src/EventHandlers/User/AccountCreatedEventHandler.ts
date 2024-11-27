export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { AccountCreatedEvent } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { UserSearchReport } from '../../Reports/Entities/User'
import { Address } from '../../TraumaIndicator/implementations';

@EventsHandler(AccountCreatedEvent)
export class AccountCreatedEventHandler implements IEventHandler<AccountCreatedEvent>
{

    async handle(event: AccountCreatedEvent): Promise<void> {
        let account = new UserSearchReport(event.Id);
        account.Name = event.FirstName + " " + event.LastName;
        account.Email = event.Email;
        account.Password = event.Password;
        account.DoB = event.DateOfBirth;
        account.Address = new Address( event.Street, event.ZipCode, event.Province, event.Country);
        account.Role = event.Type;

        
        await FirebaseRepository.Put(account);
        return;
    }
}