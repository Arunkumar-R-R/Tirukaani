import React from 'react';
import './App.css';
import Add_new_client from './components/client/add_new_client';
import add_new_client from './components/client/add_new_client';
import Deal_page from './pages/deal_page/Deal_page';
import Add_new_client_form from './pages/form/Add_new_client_form';
import Form from './pages/form/Add_new_client_form';
import Home_page from './pages/home_page/Home_page';

function App() {
  return (
    <div className="App">
     <Add_new_client_form/>
      {/* <Add_new_client/> */}
      {/* <Deal_page/> */}
      {/* <Home_page></Home_page> */}
    </div>
  );
}

export default App;
