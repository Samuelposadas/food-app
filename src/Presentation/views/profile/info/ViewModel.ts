import React from 'react'
import { removeUserLocalUseCase } from '../../../../Domain/useCases/localUser/removeUserLocal'


const ProfileInfoViewModel = () => {
    

    const removeSession = async() => {
    await removeUserLocalUseCase()
    }
  return {
    removeSession
  }
}

export default ProfileInfoViewModel