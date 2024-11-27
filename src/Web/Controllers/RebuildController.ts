import { Controller, Param, Get } from '@nestjs/common';
import { Event } from '../../Events';
import { BaseController } from '../Framework';
import { EventBus } from '@nestjs/cqrs';
import { EventSearchReport } from '../../Reports/Entities/eventStore';
import { FirebaseRepository } from '../../Firebase/FirebaseRepository';
import { Guid } from 'guid-typescript';

@Controller()
export class RebuildController extends BaseController {
    public constructor(protected readonly eventBus: EventBus) {
        super();
    }

    @Get('/rebuild/:type')
    public async rebuild(@Param('type') type?: string): Promise<void> {
        // Determine the type of event to process
        const eventType = Event;

        // Get the total number of events
        const totalCount = await FirebaseRepository.Count(EventSearchReport);

        // Build the query
        let events: EventSearchReport[];
        if (type) {
            // Filter by Type if provided
            events = await FirebaseRepository.Search(EventSearchReport, 'Type', type, type);
        } else {
            // Get all events
            events = await FirebaseRepository.GetMany(EventSearchReport);
        }

        // Sort events by Date in descending order
        events.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

        // Publish events
        for (const event of events) {
            // Dynamically create the event instance
            const typedEvent = eval(`new Events_1.${event.Type}()`);

            // Map event properties
            const props = Object.keys(event.Event);
            props.forEach((prop) => {
                const value = (event.Event as any)[prop];
                if (value && value.value) {
                    typedEvent[prop] = Guid.parse(value.value);
                } else if (
                    typeof value === 'string' &&
                    value.match(/^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/)
                ) {
                    typedEvent[prop] = Guid.parse(value);
                } else {
                    typedEvent[prop] = value;
                }
            });

            // Publish the typed event
            this.eventBus.publish(typedEvent);
        }
    }
}
