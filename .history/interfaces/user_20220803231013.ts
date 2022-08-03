export interface User{ 
    _id: string;
    userName: string;
    password: string;
    fullName: string;
    mail: string;
    mobile: string;
    displayName: string;
    gender: string;
    bio: string;
    avatar: string;
    isVerified: Boolean;
    followers: Array<string>;
    following: Array<string>;
    postSaved: Array<string>;
}