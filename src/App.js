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

function App() {
  
  return (
    <div className="App">
        <Router>
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
        </Router>
    </div>
  );
}

export default App;
    //  {currentUser === false ? (
    //     <BrowserRouter>
    //       <div>
    //           <Route exact path="/" >
    //             <Login getuserdata={getuserdata} ></Login>
    //           </Route>
    //       </div>
    //     </BrowserRouter>
    //   ) : (
    //     <BrowserRouter> 
    //       <div>
            // <Route  path="/account" >
            //   <Account></Account>
            // </Route>
            // <Route  path="/home" >
            //   <Home></Home>
            // </Route>
    //         <Route exact path="/" >
    //           <Login getuserdata={getuserdata} ></Login>
    //         </Route>
    //       </div>
    //       <div>
    //         <nav className='bottom_nav'>
    //           <Add_button></Add_button>
    //           <Bottom_navigation></Bottom_navigation>
    //         </nav>
    //       </div>
    //     </BrowserRouter>
    //   )}