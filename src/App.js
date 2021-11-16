import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch>
          <Route exact path="/" component ={Home} />
          <Route  path="/profile" component ={Profile} />
        </Switch> 
      </Router> 
    </div>
  );
}

export default App;
