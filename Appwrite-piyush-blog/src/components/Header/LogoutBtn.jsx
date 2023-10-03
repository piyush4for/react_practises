import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/authentication/authSlice'
import authService from '../../Service/appwrite/auth'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
      authService.logout()
      try {
        dispatch(logout())
      } catch (error) {
        console.log(error,"error in logout authService");
      }
  }
return (
  <button
  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
  onClick={logoutHandler}
  >Logout</button>
)
}

export default LogoutBtn