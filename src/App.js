import React from 'react';
import { HashRouter, Switch, Route} from "react-router-dom";
import './App.css';
import { Offline, Online } from "react-detect-offline";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Courses from './pages/Сourses';
import NoInternetConnection from './components/NoInternetConnection';

function App() {
  return (
    <div className="App">
      <Online>
        <HashRouter basename="/">  
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route  path="/profile" component ={Profile} />
            <Route  path="/courses" component ={Courses} />
          </Switch> 
        </HashRouter> 
      </Online>
      <Offline>
        <NoInternetConnection/>
      </Offline>
    </div>
  );
}

export default App;
