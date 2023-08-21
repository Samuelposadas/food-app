import { AuthRepositoryImpl } from "../../../Data/sources/remote/repositories/authRepository"; 
import { User } from "../../entities/User";

const {register} = new AuthRepositoryImpl   
export const registerAuthUseCase = async (user:User)=>{
        return await register(user)
};