import React from "react";
`import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import { AuthProvider } from "./Context/AuthProvider";
import { ClientProvider } from "./Context/ClientProvider";
import Account from "./pages/Account/Account";
import Clienthome from "./pages/Clienthome/Clienthome";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ClientProvider>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/account">
                <nav className="bottom_nav">
                  <BottomNavigation></BottomNavigation>
                </nav>
                <Account></Account>
              </PrivateRoute>
              <PrivateRoute path="/home/:id">
                <nav className="bottom_nav">
                  <BottomNavigation></BottomNavigation>
                </nav>
                <Clienthome></Clienthome>
              </PrivateRoute>
              <PrivateRoute exact path="/home">
                <nav className="bottom_nav">
                  <BottomNavigation></BottomNavigation>
                </nav>
                <Home></Home>
              </PrivateRoute>

              <Route exact path="/">
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
