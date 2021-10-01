import React, { useState } from 'react';
import reactDom, { createPortal } from 'react-dom';
import './Modal.css'

export const Modal = ({children, closeModal}) => {

    return createPortal(
          <div className="modal " onClick={closeModal}>
            <div className='bottom col-12  col-xl-3 col-lg-4 col-md-5 col-sm-6' onClick={(e)=>e.stopPropagation()} >
                  {children}
            </div>
          </div>
        ,
      document.getElementById('modal-root')
    );

  };
