import { Guid } from "guid-typescript";
import { Report } from './Report'
import { Field } from '@../../../TraumaIndicator/Utilities'


export abstract class SearchReport extends Report {
    constructor(id?: Guid) {
        super(id)

        this.TypeName = this.constructor.name;
    }

    @Field('text')
    public TypeName: string

    public abstract UpdateCalculatedProperties() : void
}