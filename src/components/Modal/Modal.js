import React, { useState } from 'react';
import reactDom, { createPortal } from 'react-dom';
import './Modal.css'

export const Modal = ({children, closeModal}) => {
  
    return createPortal(
          <div className="modal" onClick={closeModal}>
            <div className='bottom' onClick={(e)=>e.stopPropagation()} >
                  {children}
            </div>
          </div>
        ,
      document.getElementById('modal-root')
    );

  };
