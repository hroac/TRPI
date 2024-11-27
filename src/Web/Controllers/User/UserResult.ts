export interface UserResult {

    userId: string;
    name: string;
    email: string;
    premium: boolean;
    password: string;
    role: number;

}

export interface UserPremium {
    userId: string;
} 

export interface ChatResult {
    message: string;
} 