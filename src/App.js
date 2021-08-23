import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Clienthome from './pages/Clienthome/Clienthome'
import { Route,Switch } from "react-router-dom";
import Login from './pages/login/Login';
import Bottom_navigation from './components/Bottom_navigation/Bottom_navigation';
import firebase from "firebase";



function App() {
  
var firebaseConfig = {
  apiKey: "AIzaSyAYcf37_IHoArlTUqI99w5axuwExBJZB7w",
  authDomain: "thiruvaniapp.firebaseapp.com",
  projectId: "thiruvaniapp",
  storageBucket: "thiruvaniapp.appspot.com",
  messagingSenderId: "306408633303",
  appId: "1:306408633303:web:ee2832f48a2ca80f6b9192"
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
function getuserdata(e)
{
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    console.log(email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
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
          <Route  path="/home" >
            <Home></Home>
          </Route>
          <Route exact path="/" >
            <Login getuserdata={getuserdata} ></Login>
          </Route>
       </Switch>
    </div>
  );
}

export default App;
