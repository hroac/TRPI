import { CreateUserCommandHandler } from './CreateUserCommandHandler';
import { SaveResultsUserCommandHandler } from './SaveResultsUserCommandHandler';
import { UnlockPremiumCommandHandler } from './UnlockPremiumCommandHandler';

export const UserCommandHandlers = [CreateUserCommandHandler, SaveResultsUserCommandHandler, UnlockPremiumCommandHandler];