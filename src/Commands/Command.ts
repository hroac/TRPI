import { Guid } from "guid-typescript";
import { ICommand } from './ICommand'

export abstract class Command implements ICommand {
    constructor(id: Guid) {
        this.Id = id;
    }

    public Id: Guid
}