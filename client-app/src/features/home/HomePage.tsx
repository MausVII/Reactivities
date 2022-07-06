import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex justify-center items-center w-full h-full bg-teal-400'>
        <h1>HomePage</h1>
        <NavLink to='activities'>Go to activities</NavLink>
    </div>
  )
}

export default HomePage