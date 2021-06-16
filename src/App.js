import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Route,Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
