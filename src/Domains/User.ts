import { Guid } from "guid-typescript";
import { Domain } from "./Domain";
import { Address }from '../TraumaIndicator/implementations'
import { AccountType } from '../TraumaIndicator/ValueObjects'
import { AccountCreatedEvent, UserCreatedEvent, UserSavedResultsEvent } from '../Events/User'
import { PremiumUnlockedEvent } from "../Events/User/PremiumUnlockedEvent";

export class User extends Domain {

    public Name: string;

    public Email: string;
    
    public Password: string;
    
    public DoB: Date;
    
    public Address: Address;

    public Role: number;

    public LastLogin: number;

    public Premium: boolean;


    public constructor(id: Guid) {
        super(id)
    }


    public createAccount(role: AccountType, firstName: string, lastName: string, email: string, password:string, doB: Date, street: string, zipCode: string, province: string, country: string) {
        this.apply(new AccountCreatedEvent(this.Id, role.Value, firstName, lastName, email, password, doB, street, zipCode, province, country));
    }

    public createUser(name: string, email: string, password: string, role: AccountType) {
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.Role = role.Value;

        this.apply(new UserCreatedEvent(this.Id, this.Name, this.Email, this.Password, this.Role));
    }

    public authenthicate(email: string, password: string) {

        if (email !== this.Email) {
            return;
        }
    }

    public saveResults(testId: Guid, types: Record<string, number>, modes: Record<string, number>, phase: string, answers: Record<string, Record<string, string>>, gender: string) {
        this.apply(new UserSavedResultsEvent(this.Id, testId, types, modes, phase, answers, gender));
    }

    public removeUser() {
        throw new Error("Method not implemented.");
    }

    public unlockPremium() {
        if (this.Premium) {
            return;
        }

        this.apply(new PremiumUnlockedEvent(this.Id))
    }

}