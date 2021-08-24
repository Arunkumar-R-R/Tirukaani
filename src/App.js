import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { Route,Switch } from "react-router-dom";
import Login from './pages/login/Login';
import Bottom_navigation from './components/Bottom_navigation/Bottom_navigation';
import Add_button from './components/Add_button/Add_button';
import firebase from "firebase";
import Account from './pages/Account/Account';



function App() {
  
var firebaseConfig = {
  apiKey: "AIzaSyAYcf37_IHoArlTUqI99w5axuwExBJZB7w",
  authDomain: "thiruvaniapp.firebaseapp.com",
  projectId: "thiruvaniapp",
  storageBucket: "thiruvaniapp.appspot.com",
  messagingSenderId: "306408633303",
  appId: "1:306408633303:web:ee2832f48a2ca80f6b9192"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

function getuserdata(e)
{
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
} 

  return (
    <div className="App">
       <Switch>
          <Route  path="/account" >
            <Account></Account>
          </Route>
          <Route  path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/" >
            <Login getuserdata={getuserdata} ></Login>
          </Route>
       </Switch>
        <nav className='bottom_nav'>
            <Add_button></Add_button>
            <Bottom_navigation></Bottom_navigation>
        </nav>
    </div>
  );
}

export default App;
