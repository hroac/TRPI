import { StoreEventHandler } from './StoreEventHandler'

import { UserEventHandlers } from './User'

export const EventHandlers = [
    StoreEventHandler,
    ...UserEventHandlers,
]