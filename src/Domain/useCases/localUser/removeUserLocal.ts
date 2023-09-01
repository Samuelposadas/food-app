import { UserLocalRepositoryImpl } from "../../../Data/sources/remote/repositories/userLocalReposity";
import { User } from "../../entities/User";


const {remove} = new UserLocalRepositoryImpl

export const removeUserLocalUseCase =async () => {
    return await remove() 
}