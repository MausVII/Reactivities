import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  const { activityStore } = useStore()
  const { selectedActivity, editMode } = activityStore 

  useEffect(() => {
    activityStore.loadActivities()
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent/>
  return (
    <main className='w-full flex justify-center md:flex-row bg-gray-300'>
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