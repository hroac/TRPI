import { Guid } from "guid-typescript";
import { IReport } from './IReport'
import { Field, Primary } from '@../../../TraumaIndicator/Utilities'

export abstract class Report implements IReport {
    constructor(id?: Guid) {
        if (id) {
            this.Id = (id as any).value;
        } else {
            this.Id = Guid.create().toString();
        }
    }

    @Primary()
    @Field('text')
    public Id: string
}