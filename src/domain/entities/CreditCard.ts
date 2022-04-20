export default class CreditCard {
    private id: string;
    private type: string;
    private holderName: string;
    private creditCardNumber: number;
    private validity: number;
    private cvv: number;

    constructor(
        id: string,
        type: string,
        holderName: string,
        creditCardNumber: number,
        validity: number,
        cvv: number,
    ) {
        this.id = id;
        this.type = type;
        this.holderName = holderName;
        this.creditCardNumber = creditCardNumber;
        this.validity = validity;
        this.cvv = cvv;
    }
}
