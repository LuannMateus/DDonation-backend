export default class DonationRequest {
    public id: string;
    public title: string;
    public description: string;
    public ownerId: string;
    public daysRemaining: number;
    public target: number;
    public reached: number;

    constructor(
        id: string,
        title: string,
        description: string,
        ownerId: string,
        daysRemaining: number,
        target: number,
        reached: number,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.ownerId = ownerId;
        this.daysRemaining = daysRemaining;
        this.target = target;
        this.reached = reached;
    }
}
