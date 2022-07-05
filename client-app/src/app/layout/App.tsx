import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/activities' component={ActivityDashboard}/>
        <Route path='/createActivities' component={ActivityForm} />
      </div>
    </div>
  );
}

export default observer(App);
