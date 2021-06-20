import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Clienthome from './pages/Clienthome/Clienthome'
import Dealcomponent from './components/Dealcomponent/Dealcomponent'
import Deal from './pages/Deal/Deal';

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Deal />
    {/* <Clienthome></Clienthome> */}
    {/* <Dealcomponent></Dealcomponent> */}
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
