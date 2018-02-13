import { Roles } from "./model/Role";

export class User {
    email: string;
    photoUrl: string;
    role: Roles;

    constructor(authData){
        this.email = authData.email;
        this.photoUrl = authData.photoUrl;
        this.role = {reader: true};
    }
}
