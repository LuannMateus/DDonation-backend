export default class Donor {
    private id: string;

    private firstName: string;

    private lastName: string;

    private donorType: string;

    private CPF: string;

    private profileImage: string;

    private email: string;

    private password: string;

    constructor(
        id: string,
        firstName: string,
        lastName: string,
        donorType: string,
        CPF: string,
        profileImage: string,
        email: string,
        password: string,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.donorType = donorType;
        this.CPF = CPF;
        this.profileImage = profileImage;
        this.email = email;
        this.password = password;
    }
}
