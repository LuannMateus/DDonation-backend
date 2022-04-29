export default class DonorCreditCard {
    public id: string;

    public creditCardTypeId: string;

    public donorId: string;

    public holderName: string;

    public creditCardNumber: number;

    public validity: number;

    public cvv: number;

    constructor(
        id: string,
        creditCardTypeId: string,
        donorId: string,
        holderName: string,
        creditCardNumber: number,
        validity: number,
        cvv: number,
    ) {
        this.id = id;
        this.creditCardTypeId = creditCardTypeId;
        this.donorId = donorId;
        this.holderName = holderName;
        this.creditCardNumber = creditCardNumber;
        this.validity = validity;
        this.cvv = cvv;
    }
}
