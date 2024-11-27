import { Guid } from "guid-typescript"
import { Event } from "../"

export class AccountCreatedEvent extends Event {
    constructor(userId: Guid, type: number, firstName: string, lastName: string, email: string, password: string, dateOfBirth: Date, street: string, zipCode: string, province: string, country: string) {
        super(userId)

        this.Type = type;
        this.FirstName = firstName;
        this.LastName = lastName;
        this.DateOfBirth = dateOfBirth;
        this.Street = street;
        this.ZipCode = zipCode;
        this.Province = province;
        this.Country = country;
    }

    public Type: number;

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