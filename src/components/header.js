import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const { authUser } = useSelector((state) => state.user)

  return (
    authUser && 
    <div className='flex items-center justify-between p-5 py-3 border-b'>
        <h1 className='heading-lg font-bold'>EXPLORE</h1>
        <div className='flex items-center space-x-3 text-grey-dark'>
            <p>{authUser?.firstName + " " + authUser?.lastName}</p>
            <div className='w-12 rounded-full'>
                <img src={authUser?.image} alt="user" className='rounded-full' />
            </div>
        </div>
    </div> 
  )
}

export default Header
