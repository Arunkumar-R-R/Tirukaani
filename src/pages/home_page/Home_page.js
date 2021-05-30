import React from 'react';
import Button from '../../components/button/Button';
import No_data_available from './../../components/no_data_available/No_data_available';
import add from '../../asset/icons/add.png';
import './Home_page.css'

export default function Home_page()
{
    return (
        <>
          <No_data_available/>
          <div className='button-sticky-button'>
            <Button text={"Add client"} icon={add}/>
          </div>
        </>
      );
}