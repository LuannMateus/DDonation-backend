export default class DonationRequest {
    public id: string;
    public title: string;
    public ownerId: string;
    public daysRemaining: number;
    public target: number;
    public reached: number;

    constructor(
        id: string,
        title: string,
        ownerId: string,
        daysRemaining: number,
        target: number,
        reached: number,
    ) {
        this.id = id;
        this.title = title;
        this.ownerId = ownerId;
        this.daysRemaining = daysRemaining;
        this.target = target;
        this.reached = reached;
    }
}
