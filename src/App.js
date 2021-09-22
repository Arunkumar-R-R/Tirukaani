import React from 'react';
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
import Clienthome from './pages/Clienthome/Clienthome';


function App() {
  
  return (
    <div className="App">
        <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute exact  path="/account" >
                  <Account></Account>
                  <nav className='bottom_nav'>
                      <BottomNavigation></BottomNavigation>
                  </nav>
                </PrivateRoute>
                <PrivateRoute  path="/home/:id" >
                  <Clienthome></Clienthome>
                  <nav className='bottom_nav'>
                    <BottomNavigation></BottomNavigation>
                  </nav>
                </PrivateRoute>
                <PrivateRoute exact path="/home" >
                  <Home></Home>
                  <nav className='bottom_nav'>
                    <BottomNavigation></BottomNavigation>
                  </nav>
                </PrivateRoute>
                <Route exact path="/" >
                  <Login></Login>
                </Route>
              </Switch>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
