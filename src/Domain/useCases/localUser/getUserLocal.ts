import { UserLocalRepositoryImpl } from "../../../Data/sources/remote/repositories/userLocalReposity";


const {getUser} = new UserLocalRepositoryImpl

export const getUserLocalUseCase =async () => {
    return await getUser()
}