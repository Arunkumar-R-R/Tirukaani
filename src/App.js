import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Clienthome from './pages/Clienthome/Clienthome'
import { Route,Switch } from "react-router-dom";
import Login from './pages/login/Login';
import Bottom_navigation from './components/Bottom_navigation/Bottom_navigation';
import "firebase/auth";
import firebase from "firebase/app";



function App() {
  
  var firebaseConfig = {
    apiKey: "AIzaSyAYcf37_IHoArlTUqI99w5axuwExBJZB7w",
    authDomain: "thiruvaniapp.firebaseapp.com",
    projectId: "thiruvaniapp",
    storageBucket: "thiruvaniapp.appspot.com",
    messagingSenderId: "306408633303",
    appId: "1:306408633303:web:ee2832f48a2ca80f6b9192"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return (
    <div className="App">
       {/* <Switch>
          <Route  path="/client/:clientname" component={Clienthome} />
          <Route exact path="/" component={Home} />
       </Switch> */}
       {/* <Home></Home> */}
       <Login></Login>
    </div>
  );
}

export default App;
