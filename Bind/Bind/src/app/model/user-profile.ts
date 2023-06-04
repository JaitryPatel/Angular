// export class UserProfile {
//     "profilePictureFileString": "string",
//     "emailId": "string",
//     "firstName": "string",
//     "lastName": "string",
//     "phoneNumber": "string",
//     "designation": {
//       "id": 0,
//       "name": "string"
//     },
//     "modeOfWork": {
//       "id": 0,
//       "name": "string"
//     },
//     "city": {
//       "id": 0,
//       "name": "string"
//     },
//     "floor": {
//       "id": 0,
//       "name": "string"
//     },
//     "column": {
//       "id": 0,
//       "name": "string"
//     },
//     "seat": {
//       "id": 0,
//       "seatNumber": 0,
//       "booked": true
//     },
//     "days": [
//       {
//         "id": 0,
//         "day": "string"
//       }
//     ]

//   "error": "string"
// };

//GET API User-Profile
export class UserProfile {
    public response: string;
    public profilePictureFileString: string;
    public emailId: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public designation: number;
    public modeOfWork: number;
    public city: number;
    public floor: number;
    public column: number;
    public seat: number;
    public days: number;
    public error: string;

    constructor(
        response: string,
        profilePictureFileString: string,
        emailId: string,
        firstName: string,
        lastName: string,
        phoneNumber: string,
        designation: number,
        modeOfWork: number,
        city: number,
        floor: number,
        column: number,
        seat: number,
        days: number,
        error: string,

    ) {
        this.response = response;
        this.profilePictureFileString = profilePictureFileString,
        this.emailId = emailId,
        this.firstName = firstName,
        this.lastName = lastName,
        this.phoneNumber = phoneNumber,
        this.designation = designation,
        this.modeOfWork = modeOfWork,
        this.city = city,
        this.floor = floor,
        this.column = column,
        this.seat = seat,
        this.days = days,
        this.error = error

    }

}

