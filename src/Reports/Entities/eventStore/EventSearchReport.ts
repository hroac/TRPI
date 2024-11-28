import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'
import { Event } from '../../../Events'

export class EventSearchReport extends SearchReport {
    constructor(id?: Guid, event?: Event) {
        super(id)
        this.Event = event ?? new Event(Guid.parse(this.Id));
        this.Type = event ? event.constructor.name : ''
        this.Date = event ? event.Date : new Date();
    }

    public Event: Event;

    public Date: Date;

    public Type: string;

    UpdateCalculatedProperties(): void { }
}