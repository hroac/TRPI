
import { Guid } from "guid-typescript"
import { Event } from "../"
    export class UserRemovedEvent extends Event {
        public constructor(userId: Guid) {
        super(userId)

    }
   
        
    }