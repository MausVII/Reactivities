import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from '../../../app/stores/store'

const ActivityList = () => {

    const { activityStore } = useStore()
    const { deleteActivity, activitiesByDate, loading } = activityStore
    const [target, setTarget] = useState('')

    const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name)
        deleteActivity(id)
    }

  return (
    <div className="">
        {activitiesByDate.map( activity => (
            <div key={activity.id}
                className="w-{30%} m-4 stats stats-vertical shadow flex-col">
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
                        <NavLink to={`/activities/${activity.id}`}><button className='btn btn-primary mx-2'
                        >View</button></NavLink>
                        {!loading && target != activity.id && 
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

export default observer(ActivityList)