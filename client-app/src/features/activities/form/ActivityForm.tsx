import React, { ChangeEvent, useState } from 'react'
import { Activity } from '../../../app/models/activity'

interface Props {
  activity: Activity | undefined,
  closeForm: () => void,
  createOrEdit: (activity: Activity) => void,
  submitting: boolean,
}

const ActivityForm = ({activity: selectedActivity, closeForm, createOrEdit, submitting}: Props) => {

  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    createOrEdit(activity)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target
    setActivity({...activity, [name]: value})
  }

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
            <button className='mx-2 p-2 rounded-md bg-green-500' type='submit' disabled={submitting}>Submit</button>
            <button className='mx-2 p-2 rounded-md bg-yellow-300'
            onClick={closeForm}>Cancel</button>
          </div>
      </form>
  )
}

export default ActivityForm

