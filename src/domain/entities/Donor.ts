export default class Donor {
    public id: string;

    public firstName: string;

    public lastName: string;

    public donorType: string;

    public CPF: string;

    public profileImage: string;

    public email: string;

    public password: string;

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
