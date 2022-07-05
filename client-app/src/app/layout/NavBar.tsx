import React from 'react'
import { useStore } from '../stores/store'

const NavBar = () => {
    const { activityStore } = useStore()
  return (
    <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:-px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 items-center sm:hidden'>
                    <button type='button' className='inline-flex items-center justify-center p-2 rounded-md text-gray-400
                    hover:text-white hover:bg-gray-700 focus:outline-none'>
                        <span className='sr-only'>Open main menu</span>
                        <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                
                        <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                    <div className='flex-shrink-0 flex items-center'>
                        <h1 className='text-white font-bold border-r border-l border-white p-2'>Reactivities</h1>
                    </div>

                    <div className='hidden sm:block sm:ml-6'>
                        <div className='flex space-x-4'>
                            <a href='#' className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
                            aria-current="page">Activities</a>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='btn btn-accent'
                    onClick={() => activityStore.openForm()}
                    >Add Activity</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar