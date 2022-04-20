export default class DonorCreditCard {
    private id: string;
    private ownerId: string;
    private creditCardId: string;

    constructor(id: string, ownerId: string, creditCardId: string) {
        this.id = id;
        this.ownerId = ownerId;
        this.creditCardId = creditCardId;
    }
}
