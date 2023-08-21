export interface User {
    id?: string;
    name: string;
    lastname: string;
    phone: string | null;
    email: string;
    password: string;
    confirmPassword: string;
}