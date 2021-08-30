import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './pages/login/Login';
import BottomNavigation from './components/BottomNavigation/BottomNavigation';
import AddButton from './components/AddButton/AddButton';
import Account from './pages/Account/Account';
import { AuthProvider } from './Context/AuthProvider';
import PrivateRoute from './utils/PrivateRoute';
import FormModal from './components/FormModal/FormModal';
import Katcha from './components/katcha/Katcha';
import Add_katcha from './components/Add_katcha/Add_katcha';
import { katchaPurity, katchaTouch, katchaweight } from './utils/calculation';
import Button from './components/Button/Button';

function App() {
  const [inputList, setInputList] =  useState([{ weight: "", touch: "" }]);

  function handleAddDealForm(e){
    
    e.preventDefault();
    let totalKatchaPurity = katchaPurity(inputList);
    let totalKatchaWeight = katchaweight(inputList);
    let katchatouch = katchaTouch(totalKatchaPurity, totalKatchaWeight);
    console.log(katchatouch);
    let result = document.getElementById('result');
    result.innerHTML = katchatouch;
  }

  function handleRemove(index){
    let list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  function addWeightInput()
  { 
    setInputList([...inputList,{ weight: "", touch: "" } ]);
  }

  return (
    
    <div className="App container">
      <form onSubmit={handleAddDealForm}>
         <Katcha inputList={inputList} handleRemove={handleRemove} setInputList={setInputList} ></Katcha>
        < Add_katcha onClick={addWeightInput}></ Add_katcha>  
        <div className= 'submit_button'>
          <Button type={'submit'} buttontype={'primarybtn'} text={"Add Deal"} />
        </div>
      </form>
      <div className = 'my-3 flex mx-auto display-5' id='result'>

      </div>
        {/* <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute  path="/account" >
                  <Account></Account>
                  <nav className='bottom_nav'>
                      <BottomNavigation></BottomNavigation>
                  </nav>
                </PrivateRoute>
                <PrivateRoute  path="/home" >
                  <Home></Home>
                  <nav className='bottom_nav'>
                    <AddButton></AddButton>
                    <BottomNavigation></BottomNavigation>
                  </nav>
                </PrivateRoute>
                <Route exact path="/" >
                  <Login></Login>
                </Route>
              </Switch>
          </AuthProvider>
        </Router> */}
       
   </div>
  );
}

export default App;
