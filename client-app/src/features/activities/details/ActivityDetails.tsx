import React from 'react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity,
    cancelSelectActivity: () => void,
    openForm: (id: string) => void,
}

const ActivityDetails = ({activity, cancelSelectActivity, openForm}: Props) => {
  return (
    <div className='height-auto bg-white w-auto my-4 rounded-md shadow-xl'>
        <img src={`assets/food.bmp`} alt='activity lol'
        className='h-64 w-auto'/>
        <section className='mx-4'>
            <p className='text-center'>{activity.title}</p>
            <p className='font-light'>{activity.date}</p>
        </section>

        <div className='border-t border-b m-2 h-12 p-2'>
            <p>{activity.description}</p>
        </div>

        <div className=' mx-4 py-2 flex justify-between'>
            <button className='w-24 p-2 rounded-sm bg-green-500'
            onClick={() => openForm(activity.id)}
            >Edit</button>
            <button className='w-24 p-2 rounded-sm bg-red-500'
            onClick={cancelSelectActivity}
            >Cancel</button>
        </div>
    </div>
  )
}

export default ActivityDetails