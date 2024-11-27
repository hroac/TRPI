
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { UnlockPremiumCommand } from '../../Commands/User'
import { Repository } from '../Framework'
import { UserSearchReport } from '../../Reports/Entities/User'
import { User } from '../../Domains/User'

@CommandHandler(UnlockPremiumCommand)
export class UnlockPremiumCommandHandler implements ICommandHandler<UnlockPremiumCommand> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

    async execute(command: UnlockPremiumCommand) {
        const { Id } = command
        const props = await this.repository.Get<UserSearchReport, User>(Id, UserSearchReport, User)
        const domain = this.publisher.mergeObjectContext(props)

        await domain.unlockPremium();
        await domain.commit();
        return;

    }
}