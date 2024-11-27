
import { Guid } from "guid-typescript";
import { AccountType } from "../../TraumaIndicator/ValueObjects";
import { Command } from "../Command";

export class CreateUserCommand extends Command {
        public constructor(userId: Guid, name: string, email:string, password: string, role:AccountType) {
        super(userId)

            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Role = role;
            
        }

    public Name: string;

    public Email: string;

    public Password: string;

    public Role: AccountType;



   
        
}