export default class DonorCreditCard {
    public id: string;
    public ownerId: string;
    public creditCardId: string;

    constructor(id: string, ownerId: string, creditCardId: string) {
        this.id = id;
        this.ownerId = ownerId;
        this.creditCardId = creditCardId;
    }
}
