import React, { useState } from 'react';
import FormModal from '../FormModal/FormModal';
import { Modal } from '../Modal/Modal';
import './AddButton.css'

export default function AddButton(){
    const [show,setshow] = useState(false);
    const closeModal =()=>{
        setshow(false)
    }
    const openModal = () =>{
        setshow(true);
    }
    return (
        <>
            <button  className='add_btn button' tabIndex="0" aria-pressed="false" onClick={openModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.25 19.1989 11.329 19.3897 11.4697 19.5303C11.6103 19.671 11.8011 19.75 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.75 11.8011 19.671 11.6103 19.5303 11.4697C19.3897 11.329 19.1989 11.25 19 11.25H12.75Z" fill="white"/>
                </svg>
            </button>
           {
               show ?
                <Modal show = { show } closeModal={closeModal}>
                    <FormModal closeModal={closeModal} ></FormModal>
                </Modal>
               :''
           }
           
        </>
    );
}