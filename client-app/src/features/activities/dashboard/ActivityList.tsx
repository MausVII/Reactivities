import React, { SyntheticEvent, useState } from 'react'
import { Activity } from '../../../app/models/activity'

interface Props {
    activities: Activity[],
    selectActivity: (id: string) => void,
    deleteActivity: (id: string) => void,
    submitting: boolean
}

const ActivityList = ({activities, selectActivity, deleteActivity, submitting}: Props) => {

    const [target, setTarget] = useState('')

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name)
        deleteActivity(id)
    }

  return (
    <div className="">
        {activities.map( activity => (
            <div key={activity.id}
                className="m-4 stats stats-vertical shadow flex-col">
                <div className='stat'>
                    <div className='stat-value'>{activity.title}</div>
                    <div className='stat-desc'>{activity.date}</div>
                </div>

                <div className='stat'>
                    <div className='stat-actions text-center'>{activity.description}</div>
                    <p className='stat-desc text-center'>{activity.city}, {activity.venue}</p>
                </div>

                <div className='stat my-2 w-full flex justify-between'>
                    <button className='btn btn-ghost'>{activity.category}</button>

                    <div className='flex justify-end'>
                        <button className='btn btn-primary mx-2'
                        onClick={() => selectActivity(activity.id)}>View</button>
                        {!submitting && target != activity.id && 
                        <button name={activity.id}
                        className='btn btn-secondary mx-2'
                        onClick={(e) => handleActivityDelete(e, activity.id)}>Delete</button>}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ActivityList