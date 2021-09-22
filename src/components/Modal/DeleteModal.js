import React from 'react';
import Button from '../Button/Button';
import './modal.css';

export default function DeleteModal(){
    return (
        <>
         <div className='b-modal modal display-block' >
                 <div className='bottom'  onClick={e => e.stopPropagation()}>
                    <div className='delete-description'>
                        <p>Do you want to delete the client <span className='client-name-in-modal'>Arunkumar</span> and his deals ?</p>
                    </div>
                    <div className='delete-btn-container'>
                        <Button  text={'Delete'} buttontype={'primarybtn'} ></Button>
                        <Button  text={'Cancel'} buttontype={'secondarybtn'}></Button>
                    </div>
                </div> 
        </div>
        </>
    );
}