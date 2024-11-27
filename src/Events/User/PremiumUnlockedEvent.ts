import { Event } from '../Event';
import { Guid } from 'guid-typescript';

export class PremiumUnlockedEvent extends Event {
    constructor(public readonly userId: Guid) {
        super(userId);
    }
}
