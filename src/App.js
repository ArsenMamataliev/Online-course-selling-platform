import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
        <Router>  
          <Switch>
            <Route exact path="/" component ={Home} />
            <Route  path="/profile" component ={Profile} />
            <Route  path="/courses" component ={Courses} />
          </Switch> 
        </Router> 
      </Online>
      <Offline>
        <NoInternetConnection/>
      </Offline>
    </div>
  );
}

export default App;
