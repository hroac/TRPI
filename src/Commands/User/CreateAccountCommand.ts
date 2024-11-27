import { Guid } from "guid-typescript";
import { Command } from "../Command";
import { AccountType } from  "../../TraumaIndicator/ValueObjects";

export class CreateAccountCommand extends Command {
    public constructor(accountId: Guid, role: AccountType, firstName: string, lastName: string, email: string, password: string, dateOfBirth: Date, street: string, zipCode: string, province: string, country: string) {
        super(accountId)

        this.Role = role;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.Password = password;
        this.DateOfBirth = dateOfBirth;
        this.Street = street;
        this.ZipCode = zipCode;
        this.Province = province;
        this.Country = country;
    }

    public Role: AccountType;

    public FirstName: string;

    public LastName: string;

    public Email: string;

    public Password: string;

    public DateOfBirth: Date;

    public Street: string;

    public ZipCode: string;

    public Province: string;

    public Country: string;
}