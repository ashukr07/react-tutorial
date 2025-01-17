import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        //yeh 1 promise return kartha hua
        authService.logout().then(()=>{dispatch(logout)})
    }
  return (
    <div>
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >
            Logout
        </button>
    </div>
  )
}

export default LogoutBtn