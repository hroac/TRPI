import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'
import { Event } from '../../../Events'
import { Index, Field } from '../../../TraumaIndicator/Utilities'
import { Address } from "../../../TraumaIndicator/implementations";
import { TestResults } from "../../../TraumaIndicator/ValueObjects"; 


@Index()
export class UserSearchReport extends SearchReport {
    constructor(public id?: Guid) {
        super(id);
    }

    @Field('text')
    public Name!: string;

    @Field('text')
    public Email!: string;

    @Field('text')
    public Password!: string;

    @Field('date')
    public DoB!: Date;

    @Field({nested: Address})
    public Address!: Address;

    @Field('integer')
    public Role!: number;

    @Field('text')
    public TestId?: string;

    @Field('date')
    public LastLogin!: Date;

    @Field('boolean') 
    public Premium!: boolean;

   

    UpdateCalculatedProperties(): void { }
}