import { Enumeration } from "./Enumeration";

export class CardSize extends Enumeration {
    public constructor(value: number, displayName: string) {
        super(value, displayName)
    }

    public static XS: CardSize = new CardSize(1, 'xs')

    public static S: CardSize = new CardSize(2, 's')

    public static M: CardSize = new CardSize(2, 'm')

    public static L: CardSize = new CardSize(4, 'l')

    public static XL: CardSize = new CardSize(5, 'xl')

    public static XXL: CardSize = new CardSize(6, 'xxl')
}