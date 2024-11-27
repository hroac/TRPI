export class Address implements Address {
    constructor( street: string, zipCode: string, province: string, country: string) {


        this.Street = street;
        this.ZipCode = zipCode;
        this.Province = province;
        this.Country = country;
    }

    public Street: string;

    public ZipCode: string;

    public Province: string;

    public Country: string
}