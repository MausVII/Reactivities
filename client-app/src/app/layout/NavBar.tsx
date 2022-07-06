import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-gray-800'>
        <div className='flex justify-between max-w mx-auto'>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                    <h1 className='text-white font-bold border-r border-l border-white p-2'>Reactivities</h1>
                </div>

                <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                    <NavLink to='/' exact className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                        >Home</NavLink>
                        <NavLink to='/activities' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                        >Activities</NavLink>
                    </div>
                </div>
            </div>

            <div>
                <NavLink to='/createActivity'>
                    <button className='btn btn-accent'>Add Activity</button>
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default NavBar