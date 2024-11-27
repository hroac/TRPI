
import { Guid } from "guid-typescript"
import { Event } from "../"
    export class UserCreatedEvent extends Event {
        public constructor(userId: Guid, name: string, email: string, password: string, role: number) {
            super(userId)

            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Role = role;

        }

        public Name: string;

        public Email: string;

        public Password: string;

        public Role: number;
        
    }