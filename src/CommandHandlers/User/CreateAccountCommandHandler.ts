import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { CreateAccountCommand } from '../../Commands/User'
import { Repository } from '../Framework'
import { UserSearchReport } from '../../Reports/Entities/User'
import { User } from '../../Domains/User'

@CommandHandler(CreateAccountCommand)
export class CreateAccountCommandHandler implements ICommandHandler<CreateAccountCommand> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

    async execute(command: CreateAccountCommand) {
        const { Id } = command
        const props = await this.repository.Get<UserSearchReport, User>(Id, UserSearchReport, User)
        const domain = this.publisher.mergeObjectContext(props)

        await domain.createAccount(command.Role, command.FirstName, command.LastName, command.Email, command.Password, command.DateOfBirth, command.Street, command.ZipCode, command.Province, command.Country);
        await domain.commit();
        return;

    }
}
