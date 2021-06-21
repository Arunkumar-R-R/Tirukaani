import React,{useState} from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal(props){
  function closemodal()
  {
    props.onClose();
  }

    return ReactDOM.createPortal(
            <div className="modal" onClick={closemodal}>
                 <div className={` wrapper bottom`}  onClick={e => e.stopPropagation()}>
           
           
                 </div>
            </div>
        ,
        document.getElementById("root")

    );
}