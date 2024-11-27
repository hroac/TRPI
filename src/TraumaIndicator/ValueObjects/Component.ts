//command, commandhandler, domain, event, evenhandler
import { Enumeration } from "./Enumeration";

export class Component extends Enumeration {
    public constructor(value: number, displayName: string) {
        super(value, displayName)
    }

    public static All : Component =  new Component(0, 'All')

    public static Command: Component = new Component(1, 'Command')

    public static CommandHandler: Component = new Component(2, 'CommandHandler')

    public static Domain: Component = new Component(2, 'Domain')

    public static Event: Component = new Component(4, 'Event')

    public static EventHandler: Component = new Component(5, 'EventHandler')
}