import React,{useEffect,useState} from 'react'
import { getUserLocalUseCase } from '../../Domain/useCases/localUser/getUserLocal';
import { ToastAndroid } from 'react-native';
import { User } from '../../Domain/entities/User';

const useUserlocal = () => {
    const [error, setError] = useState<string>("")
    const [user, setUser] = useState<User>()

    const getUserSeccion = async () => {
        const user = await getUserLocalUseCase()
        setUser(user)
        
      }
  
      useEffect(() => {
        if(error !== ""){
          ToastAndroid.show(error,ToastAndroid.LONG)
        }
      }, [error])
  
      useEffect(() => {
        getUserSeccion()
      }, [])
  return {
    user,
    getUserSeccion
  }
}
export default useUserlocal