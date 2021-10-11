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
import DynamicSelect from './components/DynamicSelect/DynamicSelect';
import { ClientProvider } from './Context/ClientProvider';


function App() {
  
  return (
    <div className="App">
      <ClientProvider>
        <Router>
          <AuthProvider>
              <Switch>
                <PrivateRoute exact  path="/account" >
                  <nav className='bottom_nav'>
                      <BottomNavigation></BottomNavigation>
                  </nav>
                  <Account></Account>
                </PrivateRoute>
                <PrivateRoute  path="/home/:id" >
                  <nav className='bottom_nav'>
                    <BottomNavigation></BottomNavigation>
                  </nav>
                  <Clienthome></Clienthome>
                </PrivateRoute>
                <PrivateRoute exact path="/home" >
                  <nav className='bottom_nav'>
                    <BottomNavigation></BottomNavigation>
                  </nav>
                  <Home></Home>
                </PrivateRoute>
                
                <Route exact path="/" >
                  <Login></Login>
                </Route>
              </Switch>
          </AuthProvider>
        </Router>
      </ClientProvider>
    </div>
  );
}

export default App;
