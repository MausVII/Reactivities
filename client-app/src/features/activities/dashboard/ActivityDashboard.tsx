import { observer } from 'mobx-react-lite'
import React from 'react'
import { useStore } from '../../../app/stores/store'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  const { activityStore } = useStore()
  const { selectedActivity, editMode } = activityStore 
  return (
    <main className='flex justify-between md:flex-row bg-gray-300'>
        <div className=''>
            <ActivityList />
        </div>
        <div className='flex flex-col mx-10'>
            {selectedActivity && !editMode && 
            <ActivityDetails />}
            {editMode && 
            <ActivityForm />}
        </div>
    </main>
  )
}

export default observer(ActivityDashboard)