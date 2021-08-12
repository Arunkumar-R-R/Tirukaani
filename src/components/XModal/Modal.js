import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal(props){
    function closemodal(){
      props.onClose();
    }
    const showHideClassName = props.showthiruvanistatusmodal ? "b-modal modal display-block" : " b-modal modal display-none";
    return ReactDOM.createPortal(
            <div className={showHideClassName} onClick={closemodal}>
                 <div className='wrapper bottom'  onClick={e => e.stopPropagation()}>
                    {props.children}
                 </div>
            </div>
        ,
        document.getElementById("root")

    );
}
