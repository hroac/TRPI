import { CommandBus } from '@nestjs/cqrs'
import { FileLogger } from "../TraumaIndicator/Utilities/FileLogger";

export abstract class Watcher {

    public constructor(commandBus?: CommandBus) {
        this.commandBus = commandBus
        this.log = new FileLogger()
    }

    public log: FileLogger;

    protected commandBus?: CommandBus;

    public abstract Watch(timeout : number, ...args : any[]) : void
}