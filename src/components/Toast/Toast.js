import React from 'react'

export default function Toast({type,text}){
    return(
        <div className={`alert  my-4 ${type}`}  role="alert">
        {text}
        </div>
    );
}