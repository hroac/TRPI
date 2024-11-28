import { Guid } from "guid-typescript";
import { Report } from './Report'


export abstract class SearchReport extends Report {
    constructor(id?: Guid) {
        super(id)

        this.TypeName = this.constructor.name;
    }

    public TypeName: string

    public abstract UpdateCalculatedProperties() : void
}