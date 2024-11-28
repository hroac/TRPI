import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'
import { Event } from '../../../Events'
import { Address } from "../../../TraumaIndicator/implementations";
import { TestResults } from "../../../TraumaIndicator/ValueObjects"; 


export class UserSearchReport extends SearchReport {
    constructor(public id?: Guid) {
        super(id);
    }

    public Name!: string;

    public Email!: string;

    public Password!: string;

    public DoB!: Date;

    public Address!: Address;

    public Role!: number;

    public TestId?: string;

    public LastLogin!: Date;

    public Premium!: boolean;

   

    UpdateCalculatedProperties(): void { }
}