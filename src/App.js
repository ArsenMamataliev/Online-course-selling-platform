import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Courses from './pages/Сourses';

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route  path="/profile" component ={Profile} />
          <Route  path="/courses" component ={Courses} />
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
