import * as fs from 'fs'
import { Component } from '../../TraumaIndicator/ValueObjects'


export class ComponentBuilder {

       public constructor(component: Component) {
        this.Component =  component;
    }

    public Component: Component;

    public static Command = (component: string, entity: string, action: string) => `
import { Guid } from "guid-typescript";
import { Command } from "../Command";

export class ${action}${entity}${component} extends Command {
        public constructor(${entity.toLowerCase()}Id: Guid) {
        super(${entity.toLowerCase()}Id)

    }

   
        
    }`;

    public static CommandHandler = (component: string, entity: string, action: string) => `
import { ICommandHandler, EventPublisher, CommandHandler } from '@nestjs/cqrs';
import { Create${entity}Command } from '../../Commands/${entity}'
import { Repository } from '../Framework'
import { ${entity}SearchReport } from '../../Reports/Entities/${entity}'
import { ${entity} } from '../../Domain/${entity}'

@CommandHandler(${action}${entity}Command)
export class ${action}d${entity}${component} implements ICommandHandler<${action}${entity}Command> {
    constructor(
        protected readonly publisher: EventPublisher,
        protected readonly repository: Repository
    ) {
    }

    async execute(command: ${action}${entity}Command) {
        const { Id } = command
        const props = await this.repository.Get<${entity}SearchReport, ${entity}>(Id, ${entity}SearchReport, User)
        const domain = this.publisher.mergeObjectContext(props)

        await domain.${action.toLowerCase()}${entity}();
        await domain.commit();
        return;

    }
}`;

    public static Domain = (component: string, entity: string, action: string) => `

       export class ${action}d${entity}${component}} extends Domain {


            public constructor(id: Guid) {
                super(id)
            }


            public ${action.toLowerCase()}${entity}() {
                this.apply(new ${entity}${action}${ComponentBuilder.pastTense(action)}Event(this.Id));
            }


}
    `;

    public static Event = (component: string, entity: string, action: string) => `
import { Guid } from "guid-typescript"
import { Event } from "../"
    export class ${entity}${ComponentBuilder.pastTense(action)}${component} extends Event {
        public constructor(${entity.toLowerCase()}Id: Guid) {
        super(${entity.toLowerCase()}Id)

    }
   
        
    }`;

    public static EventHandler = (component: string, entity: string, action: string) => `export { }
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { ${entity}${ComponentBuilder.pastTense(action)}Event } from '../../Events'
import { FirebaseRepository } from '../../Firebase/FirebaseRepository'
import { ${entity}SearchReport } from '../../Reports/Entities/${entity}'

@EventsHandler(${entity}${ComponentBuilder.pastTense(action)}Event)
export class ${entity}${ComponentBuilder.pastTense(action)}${component} implements IEventHandler<${entity}${ComponentBuilder.pastTense(action)}Event>
{

    async handle(event: ${entity}${ComponentBuilder.pastTense(action)}Event): Promise<void> {
        let ${entity.toLowerCase()} = new ${entity}SearchReport(event.Id);
        

        
        await FirebaseRepository.Put(${entity.toLowerCase()});
        return;
    }
}`

    

    public static create(component: Component, entity: string, action: string): void {
        let content = '';
        let fileName = '';
        let folder = '';
        switch (component) {
            case Component.Command:
                content = ComponentBuilder.Command(ComponentBuilder.capitalize(component.DisplayName), ComponentBuilder.capitalize(entity), ComponentBuilder.capitalize(action));
                fileName = `../../${component.DisplayName}s/${entity}/${action}${entity}${component.DisplayName}.ts`;
                folder = `../../${component.DisplayName}s/${entity}/${action}${entity}`;
               break;
            case Component.CommandHandler:
                content = ComponentBuilder.CommandHandler(ComponentBuilder.capitalize(component.DisplayName), ComponentBuilder.capitalize(entity), ComponentBuilder.capitalize(action));
                fileName = `../../${component.DisplayName}s/${entity}/${action}${entity}${component.DisplayName}.ts`
                folder = `../../${component.DisplayName}s/${entity}/${action}${entity}`
                break;
            case Component.Domain:
                content = ComponentBuilder.Domain(ComponentBuilder.capitalize(component.DisplayName), ComponentBuilder.capitalize(entity), ComponentBuilder.capitalize(action));
                fileName = `../../${component.DisplayName}s/${entity}.ts`;
                folder = `../../${component.DisplayName}s/`
                break;
            case Component.Event:
                content = ComponentBuilder.Event(ComponentBuilder.capitalize(component.DisplayName), ComponentBuilder.capitalize(entity), ComponentBuilder.capitalize(action));
                fileName = `../../${component.DisplayName}s/${entity}/${entity}${ComponentBuilder.pastTense(action)}${component.DisplayName}.ts`;
                folder = `../../${component.DisplayName}s/${entity}`
                break;
            case Component.EventHandler:
                content = ComponentBuilder.EventHandler(ComponentBuilder.capitalize(component.DisplayName), ComponentBuilder.capitalize(entity), ComponentBuilder.capitalize(action));
                fileName = `../../${component.DisplayName}s/${entity}/${entity}${ComponentBuilder.pastTense(action)}${component.DisplayName}.ts`;
                folder = `../../${component.DisplayName}s/${entity}`
                break;
            default:
                break;
        }

        if (component.Value == Component.All.Value) {
            Component.getAll().filter(c => c.Value !== Component.All.Value).forEach((component) => {
                ComponentBuilder.create(component, entity, action);
            })
        } else {
            if (!fs.existsSync(fileName)) {
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder, { recursive: true })
                }

                fs.writeFile(fileName, content, (err) => {
                    if (err) {
                        //console.error(`Error writing ${fileName}:`, err);
                    } else {
                        //console.log(`${fileName} created successfully.`);
                    }
                });
            } else {
                //console.log(`${fileName} already exists. write your ${component.DisplayName} manually!`);
            }
             //console.log('dont forget your index.js file!')
           
        }

        

    }

    private static pastTense(verb: string): string {
        const cqrsVerbs: { [key: string]: string } = {
            "create": "created",
            "update": "updated",
            "delete": "deleted",
            "add": "added",
            "remove": "removed",
            "register": "registered",
            "approve": "approved",
            "reject": "rejected",
            "enable": "enabled",
            "disable": "disabled",
            "schedule": "scheduled",
            "assign": "assigned"
        };
    // Handle CQRS specific verbs
    if (cqrsVerbs.hasOwnProperty(verb)) {
        return cqrsVerbs[verb];
    }

    // Handle regular verbs
    if (verb.endsWith("e")) {
        return verb + "d";
    } else if (verb.endsWith("y") && !ComponentBuilder.isVowel(verb.charAt(verb.length - 2))) {
        return verb.slice(0, -1) + "ied";
    } else {
        return verb + "ed";
    }
}

private static isVowel(char: string): boolean {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
    }

    private static capitalize(input: any) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

}

   