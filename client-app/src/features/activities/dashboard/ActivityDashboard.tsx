import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

const ActivityDashboard = () => {
  const { activityStore } = useStore()
  const { loadActivities, activityRegistry } = activityStore 

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities()
  }, [activityRegistry.size, loadActivities])

  if (activityStore.loadingInitial) return <LoadingComponent/>
  return (
    <main className='w-full flex justify-center md:flex-row bg-gray-300'>
        <div className=''>
            <ActivityList />
        </div>
        <div>
          <h2>Filter</h2>
        </div>
    </main>
  )
}

export default observer(ActivityDashboard)