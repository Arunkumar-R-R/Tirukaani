import React, { useState } from 'react';
import reactDom, { createPortal } from 'react-dom';
import './modal.css'

export const Modal = ({children, closeModal}) => {

    const screensize = window.screen.width;
    console.log(screensize,'screen size')

    return createPortal(
          <div className="modal " onClick={closeModal}>
            <div className='bottom col-12  col-xl-4 col-lg-6 col-md-6 col-sm-7' onClick={(e)=>e.stopPropagation()} >
                  {children}
            </div>
          </div>
        ,
      document.getElementById('modal-root')
    );

  };
