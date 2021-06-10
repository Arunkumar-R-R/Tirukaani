import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button/Button';
import Add_new_client_form from '../form/Add_new_client_form';
import No_data_available from './../../components/no_data_available/No_data_available';
import './Home_page.css';
import { Link} from 'react-router-dom';

export default function Home_page()
{
  const navigateto =()=>{
    ReactDOM.render (
        <Add_new_client_form/>,
        document.getElementById("root")
    )
};
    return (
        <>
          <No_data_available/>
          <div className='button-sticky-button'>
              <Link to={{pathname:'/addclient',state:{type1: 'i passed',type2:'2'}}}  className='routerlink'>
                <Button type={'button'} text={"Add client"} /> 
              </Link>
          </div>
        </>
      );
}