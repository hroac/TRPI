import { Enumeration } from "./Enumeration";

export class AccountType extends Enumeration {
    public constructor(value: number, displayName: string) {
        super(value, displayName)
    }

    public static Customer : AccountType = new AccountType(0, 'Customer')

    public static Driver : AccountType = new AccountType(1, 'driver')
}