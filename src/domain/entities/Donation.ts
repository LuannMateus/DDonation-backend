export default class Donation {
    public id: string;
    public ownerId: string;
    public donationRequestId: string;
    public paymentMethodId: string;
    public amount: number;
    public created_at: Date;

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
