import { Guid } from "guid-typescript";


export class Event {

     constructor(id: Guid) {

         this.Id = id
         this.Date = new Date();
     }

    public Id: Guid;

    public Date: Date;
}