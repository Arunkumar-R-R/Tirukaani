import React,{useEffect, useState,useRef} from 'react';
import Button from '../../components/Button/Button';
import './Home.css'
import FormModal from '../../components/FormModal/FormModal';

export default function Home()
{
    const [show, setShow] = useState(false);
 
    return(
        <div className='wrapper'>
            <div className='home-container'>
                <div className='clients-container'>
                    <h1 className='no-data-availble'>No Client Available</h1>
                </div>
                <div className='button-sticky-button'>
                    <Button type={'button'} text={"Add client"} onClick={() => setShow(true)}/> 
                <FormModal onClose={() => setShow(false)} show={show}  />
                </div>
            </div>
        </div> 
    );
}