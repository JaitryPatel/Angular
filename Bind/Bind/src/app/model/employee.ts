//Employee ApI
export class Employee {
    public response: string;
    public id: string;
    public emailId: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public profilePictureFileName: string;
    public profilePictureFilePath: string;
    public modeOfWork: number;
    public designation: number;
    public error: string;

    constructor(
        response: string,
        id: string,
        emailId: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        profilePictureFileName: string,
        profilePictureFilePath: string,
        modeOfWork: number,
        designation: number,
        error: string,
    ) {
        this.response = response;
        this.id = id;
        this.emailId = emailId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.profilePictureFileName = profilePictureFileName;
        this.profilePictureFilePath = profilePictureFilePath;
        this.modeOfWork = modeOfWork;
        this.designation = designation;
        this.error = error;
        


    }

}
