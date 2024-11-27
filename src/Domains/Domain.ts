import { AggregateRoot } from '@nestjs/cqrs';
import { Guid } from "guid-typescript";

export class Domain extends AggregateRoot {
    public constructor(id: Guid) {
        super();
        this.Id = id
    }



   public readonly Id : Guid;
}