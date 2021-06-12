import React,{useState} from 'react';
import Button from '../../components/button/Button';
import No_data_available from './../../components/no_data_available/No_data_available';
import './Home_page.css';
import Modal from '../../components/Modal/Modal';
import Add_new_client_form from '../form/Add_new_client_form'

export default function Home_page()
{
    const [clientavailablie,setclientavailability] = useState(false);
    const [show, setShow] = useState(false);

    return (
      <>
        <div className='wrapper'>
          {
            clientavailablie?"":<No_data_available/>
          }
        </div>
        <div className='button-sticky-button'>
            <Button type={'button'} text={"Add client"} onClick={() => setShow(true)} /> 
            <Modal onClose={() => setShow(false)} show={show} component={<Add_new_client_form onClose={() => setShow(false)} />} />
        </div>
      </>
       
      );
}