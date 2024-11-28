import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'
import { Event } from '../../../Events'
import { Index, Field } from '../../../TraumaIndicator/Utilities'

@Index()
export class EventSearchReport extends SearchReport {
    constructor(id?: Guid, event?: Event) {
        super(id)
        this.Event = event ?? new Event(Guid.parse(this.Id));
        this.Type = event ? event.constructor.name : ''
        this.Date = event ? event.Date : new Date();
    }

    @Field({nested: Event})
    public Event: Event;

    @Field('date')
    public Date: Date;

    @Field('text')
    public Type: string;

    UpdateCalculatedProperties(): void { }
}