export default class CreditCard {
    public id: string;
    public type: string;
    public holderName: string;
    public creditCardNumber: number;
    public validity: number;
    public cvv: number;

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
