
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { SaveResultsUserCommand } from '../../Commands/User'
import { Repository } from '../Framework'
import { UserSearchReport } from '../../Reports/Entities/User'
import { User } from '../../Domains/User'

@CommandHandler(SaveResultsUserCommand)
export class SaveResultsUserCommandHandler implements ICommandHandler<SaveResultsUserCommand> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

    async execute(command: SaveResultsUserCommand) {
        const { Id, TestId, Types, Modes, Mode, Answers, Gender } = command
        const props = await this.repository.Get<UserSearchReport, User>(Id, UserSearchReport, User)
        const domain = this.publisher.mergeObjectContext(props)

        await domain.saveResults(TestId, Types, Modes, Mode, Answers, Gender);
        await domain.commit();
        return;

    }
}