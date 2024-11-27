import { UserSavedResultsEvent } from '../../Events';
import { AccountCreatedEventHandler } from './AccountCreatedEventHandler';
import { UserCreatedEventHandler } from './UserCreatedEventHandler';
import { UserSavedResultsEventHandler } from './UserSavedResultsEventHandler';
import { PremiumUnlockedEventHandler } from './PremiumUnlockedEventHandler';

export const UserEventHandlers = [
    AccountCreatedEventHandler,
    UserCreatedEventHandler,
    UserSavedResultsEventHandler,
    PremiumUnlockedEventHandler
]