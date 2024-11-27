
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { RemoveUserCommand } from '../../Commands/User'
import { Repository } from '../Framework'
import { UserSearchReport } from '../../Reports/Entities/User'
import { User } from '../../Domains/User'

@CommandHandler(RemoveUserCommand)
export class RemoveUserCommandHandler implements ICommandHandler<RemoveUserCommand> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

async execute(command: RemoveUserCommand) {
    const { Id } = command
    const props = await this.repository.Get<UserSearchReport, User>(Id, UserSearchReport, User)
    const domain = this.publisher.mergeObjectContext(props)

    await domain.removeUser();
    await domain.commit();
    return;

}
}