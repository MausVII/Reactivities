import React from 'react'
import { Activity } from '../../../app/models/activity'
import ActivityDetails from '../details/ActivityDetails'
import ActivityForm from '../form/ActivityForm'
import ActivityList from './ActivityList'

interface Props {
    activities: Activity[],
    selectedActivity: Activity | undefined,
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    editMode: boolean,
    openForm: (id: string) => void,
    closeForm: () => void,
    createOrEdit: (activity: Activity) => void,
    deleteActivity: (id: string) => void,
    submitting: boolean,
}

const ActivityDashboard = ( { activities, selectedActivity, selectActivity, cancelSelectActivity, editMode, 
  openForm, closeForm, createOrEdit, deleteActivity, submitting}: Props ) => {
  return (
    <main className='flex justify-between md:flex-row bg-gray-300'>
        <div className=''>
            <ActivityList activities={activities} 
            selectActivity={selectActivity} deleteActivity={deleteActivity}
            submitting={submitting}
            />
        </div>
        <div className='flex flex-col mx-10'>
            {selectedActivity && !editMode && 
            <ActivityDetails 
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              openForm={openForm}
            />}
            {editMode && 
            <ActivityForm closeForm={closeForm} 
            activity={selectedActivity} createOrEdit={createOrEdit}
            submitting={submitting}/>}
        </div>
    </main>
  )
}

export default ActivityDashboard