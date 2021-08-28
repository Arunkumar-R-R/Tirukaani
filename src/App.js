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

function App() {
  
  return (
    <div className="App">
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
        <FormModal></FormModal>
    </div>
  );
}

export default App;
