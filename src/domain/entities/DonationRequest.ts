export default class DonationRequest {
    public id: string;

    public title: string;

    public description: string;

    public image: string;

    public ownerId: string;

    public daysRemaining: number;

    public category: string;

    public emergency: boolean;

    public target: number;

    public reached: number;

    constructor(
        id: string,
        title: string,
        description: string,
        image: string,
        ownerId: string,
        daysRemaining: number,
        category: string,
        emergency: boolean,
        target: number,
        reached: number,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.ownerId = ownerId;
        this.daysRemaining = daysRemaining;
        this.category = category;
        this.emergency = emergency;
        this.target = target;
        this.reached = reached;
    }
}
