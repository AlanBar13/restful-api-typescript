export interface CreateUserDto {
    id: string,
    email: string,
    password: string,
    fistName?: string,
    lastName?: string,
    permissionLevel?: number
}