import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Clienthome from './pages/Clienthome/Clienthome'
import { Route,Switch } from "react-router-dom";
import Login from './pages/login/Login';
import Bottom_navigation from './components/Bottom_navigation/Bottom_navigation';

function App() {
  return (
    <div className="App">
       {/* <Switch>
          <Route  path="/client/:clientname" component={Clienthome} />
          <Route exact path="/" component={Home} />
       </Switch> */}
       <Home></Home>
    </div>
  );
}

export default App;
