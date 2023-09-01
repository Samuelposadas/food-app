import { User } from '../../../../Domain/entities/User';
import { AuthRepository } from '../../../../Domain/repositories/authRepository';

//types
import { ApiResponse } from '../models/responseApi';

//api
import { api } from '../api/api';
import {  AxiosError } from 'axios';



export class AuthRepositoryImpl implements AuthRepository {
    async register (user:User): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>("/users/create",user)
            return Promise.resolve(response.data)
            
        } catch (error) {
            const e = (error as AxiosError)
            console.log("Error : " , e.response?.data)
            const apiError:ApiResponse = JSON.parse(JSON.stringify(e.response?.data)) 
            return Promise.resolve(apiError)
        }
    }
    async login (email:string,password:string): Promise<ApiResponse> {
        try {
            const response = await api.post<ApiResponse>("/users/login",{
                email:email,password:password
            })
            return Promise.resolve(response.data)
            
        } catch (error) {
            const e = (error as AxiosError)
            console.log("Error : " , e.response?.data)
            const apiError:ApiResponse = JSON.parse(JSON.stringify(e.response?.data)) 
            return Promise.resolve(apiError)
        }
    }
}