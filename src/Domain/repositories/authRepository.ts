import { ApiResponse } from "../../Data/sources/remote/models/responseApi";

import { User } from "../entities/User";

export interface AuthRepository {
    register(user:User):Promise<ApiResponse>
}