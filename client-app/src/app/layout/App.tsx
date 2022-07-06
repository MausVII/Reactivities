import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation()
  
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route path={'/(.+)'}
      render={() => 
        <>
        <NavBar/>
        <div>
          <Route exact path='/activities' component={ActivityDashboard}/>
          <Route path='/activities/:id' component={ActivityDetails}/>
          <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm} />
        </div>
        </>
      }/>
      
    </div>
  );
}

export default observer(App);
