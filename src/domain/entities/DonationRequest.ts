export default class DonationRequest {
    private id: string;
    private title: string;
    private ownerId: string;
    private daysRemaining: number;
    private target: number;
    private reached: number;

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
