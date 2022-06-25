import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
    .then(response => setActivities(response.data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-3xl font-bold underline'>Welcome to hope!</h1>
        <ul>
        {activities.map((activity: any) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
