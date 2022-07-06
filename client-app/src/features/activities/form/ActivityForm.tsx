import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import { v4 as uuid } from "uuid"

const ActivityForm = () => {

  const history = useHistory()
  const { activityStore } = useStore()
  const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore
  const { id } = useParams<{id: string}>()
  const [activity, setActivity] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  })

  useEffect(() => {
    if (id) loadActivity(id)
    .then((activity) => setActivity(activity!))
  }, [id, loadActivity])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid()
      }
      createActivity(newActivity)
      .then(() => {
        history.push(`/activities/${newActivity.id}`)
      })
    }
    else {
      updateActivity(activity)
      .then(() => history.push(`/activities/${activity.id}`))
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target
    setActivity({...activity, [name]: value})
  }

  if (loadingInitial) return <LoadingComponent content='Loading activity...' />

  return (
      <form className='bg-white w-64 p-4 rounded-md' onSubmit={handleSubmit} autoComplete='off' >
          <input className='my-2' type='text' placeholder='Title' 
          value={activity.title} name='title'
          onChange={handleChange}/>
          <textarea className='my-2' placeholder='Description'
          value={activity.description} name='description'
          onChange={handleChange}/>
          <input className='my-2' type='text' placeholder='Category'
          value={activity.category} name='category'
          onChange={handleChange}/>
          <input className='my-2' type='date' placeholder='Date'
          value={activity.date} name='date'
          onChange={handleChange}/>
          <input className='my-2' type='text' placeholder='City'
          value={activity.city} name='city'
          onChange={handleChange}/>
          <input className='my-2' type='text' placeholder='Venue'
          value={activity.venue} name='venue'
          onChange={handleChange}/>
          <div className='w-full my-2 flex justify-end'>
            <button className='mx-2 p-2 rounded-md bg-green-500' type='submit' disabled={loading}>Submit</button>
            <NavLink to='/activities'><button className='mx-2 p-2 rounded-md bg-yellow-300'
            >Cancel</button></NavLink>
          </div>
      </form>
  )
}

export default observer(ActivityForm)

