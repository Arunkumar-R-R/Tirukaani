import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import Button from '../../components/button/Button';
import Add_new_client_form from '../form/Add_new_client_form';
import No_data_available from './../../components/no_data_available/No_data_available';
import './Home_page.css';
import { Link, Router, useHistory } from 'react-router-dom';
// import history from './../../history';

export default function Home_page()
{
  const history = useHistory();

  const navigateto =()=>{
    history.push('/addclient');
    ReactDOM.render (
        <Add_new_client_form/>,
        document.getElementById("root")
    )
};
    return (
        <>
          <No_data_available/>
          <div className='button-sticky-button'>
             <Button type={'button'} routeto={navigateto} text={"Add client"} />

              {/* <Link to='/addclient' className='routerlink'>
              </Link> */}
          </div>
        </>
      );
}