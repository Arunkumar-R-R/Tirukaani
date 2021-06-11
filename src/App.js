import React from 'react';
import './App.css';
import Home_page from './pages/home_page/Home_page';
import { Route,Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Switch>
          <Route exact path="/" component={Home_page} />
        </Switch>
    </div>
  );
}

export default App;
