import React, { useState } from 'react';
import reactDom, { createPortal } from 'react-dom';
import './Modal.css'

export const Modal = ({children, closeModal}) => {

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
