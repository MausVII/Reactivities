import React, { useEffect, useState } from 'react';
import {v4 as uuid} from "uuid"
import { Activity } from "../models/activity"
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../../api/agent';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore()

  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const [editMode, setEditMode] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    activityStore.loadActivities()
  }, [activityStore])

  const handleSelectActivity = (id: string) => {
    setSubmitting(true)
    agent.Activities.delete(id)
    .then(() => {
      setActivities([...activities.filter(x => x.id != id)])
      setSubmitting(false)
    })
  }

  const handleCancelSelectActivity = () => setSelectedActivity(undefined)

  const handleFormOpen = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity()
    setEditMode(true)
  }

  const handleFormClose = () => setEditMode(false)

  const handleCreateOrEditActivity = (activity: Activity) => {
    setSubmitting(true)
    if (activity.id) {
      agent.Activities.update(activity)
      .then(() => {
        setActivities([...activities.filter(x => x.id != activity.id), activity])
        setSelectedActivity(activity)
        setEditMode(false)
        setSubmitting(false)
      })
    } else {
      activity.id = uuid()
      agent.Activities.create(activity)
      .then(() => {
        setActivities([...activities, activity])
        setSelectedActivity(activity)
        setEditMode(false)
        setSubmitting(false)
      })
    }
  }

  const handleDeleteActivity = (id: string) => setActivities([...activities.filter(x => x.id != id)])

  if (activityStore.loadingInitial) return <LoadingComponent/>

  return (
    <div className="App">
      <NavBar openForm={handleFormOpen}/>
      <ActivityDashboard 
        activities={activityStore.activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        editMode={editMode}
        openForm={handleFormOpen}
        closeForm={handleFormClose}
        createOrEdit={handleCreateOrEditActivity}
        deleteActivity={handleDeleteActivity}
        submitting={submitting}
      />
      
    </div>
  );
}

export default observer(App);
