export default class Donation {
    private id: string;
    private ownerId: string;
    private donationRequestId: string;
    private paymentMethodId: string;
    private amount: number;
    private created_at: Date;

    constructor(
        id: string,
        ownerId: string,
        donationRequestId: string,
        paymentMethodId: string,
        amount: number,
        created_at: Date,
    ) {
        this.id = id;
        this.ownerId = ownerId;
        this.donationRequestId = donationRequestId;
        this.paymentMethodId = paymentMethodId;
        this.amount = amount;
        this.created_at = created_at;
    }
}
