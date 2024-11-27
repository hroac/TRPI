import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'
import { Event } from '../../../Events'
import { Index, Field } from '../../../TraumaIndicator/Utilities'
import { Address } from "../../../TraumaIndicator/implementations";
import { TestResults } from "../../../TraumaIndicator/ValueObjects"; 


@Index()
export class TestSearchReport extends SearchReport {
    constructor(id?: Guid) {
        super(id)

    }
    @Field({nested: Object})
    public Types!: Record<string, number>

    @Field({ nested: Object })
    public Modes!: Record<string, number>

    @Field('text')
    public Mode!: string;

    @Field({nested: Object})
    public Answers!: Record<string, Record<string, string>>;

    @Field('text')
    public Gender!: string;

    @Field('text')
    public UserId!: string;

    @Field('date')
    public Date: Date;

    @Field('text') 
    public Percentage: string;

    UpdateCalculatedProperties(): void { }
}