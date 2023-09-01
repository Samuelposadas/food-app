import { User } from '../../../../Domain/entities/User';
import { UserLocalRepository } from '../../../../Domain/repositories/userLocalRepository';
import { localStorage } from '../../local/LocalStorage';


export class UserLocalRepositoryImpl implements UserLocalRepository {
   async save(user: User): Promise<void> {
        const {save} = localStorage()
        await save("user",JSON.stringify(user))
    }
   async getUser(): Promise<User> {
        const {getItem} = localStorage()
        const data = await getItem("user")
        const user:User = JSON.parse(data as any) 
        return user
    }
    async remove(): Promise<void> {
        const {removeItem} = localStorage()
        await removeItem("user")
    }
}