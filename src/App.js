import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Clienthome from './pages/Clienthome/Clienthome'
import { Route,Switch } from "react-router-dom";
import Deal from './pages/Deal/Deal';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route  path="/client/:clientname/:deal" component={Deal} />
          <Route  path="/client/:clientname" component={Clienthome} />
          <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
