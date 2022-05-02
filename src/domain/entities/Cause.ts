export default class Cause {
    public id: string;

    public image: string;

    public title: string;

    public description: string;

    constructor(id: string, image: string, title: string, description: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.description = description;
    }
}
