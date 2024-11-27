export interface UserModel {

    userId: string;
    name: string;
    email: string;
    password: string;
    role: number;

}

export interface PremiumModel {
    userId: string;
    token: string;
}

export interface ChatModel {
    message: string
    testId: string;
}