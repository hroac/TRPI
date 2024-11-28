import { Guid } from "guid-typescript";
import { SearchReport } from '../../Framework'

export class TestSearchReport extends SearchReport {
    constructor(id?: Guid) {
        super(id)

    }
    public Types!: Record<string, number>

    public Modes!: Record<string, number>

    public Mode!: string;
  
    public Answers!: Record<string, Record<string, string>>;

    public Gender!: string;

    public UserId!: string;

    public Date: Date;

    public Percentage: string;

    UpdateCalculatedProperties(): void { }
}