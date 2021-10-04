import React, { useRef, useState } from 'react';
import { useClient } from '../../Context/ClientProvider';
import './DynamicSelect.css'

function DynamicSelect({setSelectedClient}) {

    const [ClientSelected,setClientSelected] = useState('');
    const [hide,setHide] = useState(true);
    const client  = useClient();
    // let obj = {
    //   name:['arun','kumar','karishma','aishwariya']
    // }

    const  handleSelectClick = (ele)=>{
        const input = document.querySelector('#name');
        input.value = ele;
        input.focus();
        setClientSelected(ele);
        setHide(false);
    }

    const  handleClick = (event)=>{
        setHide(!hide);
    }

    const handleChange = (event) =>{
        let value = event.target.value;
         client.forEach(element=>{
            if(element === value){
                setHide(true);
            } 
            else{
                setHide(false);
            }
       });
       setSelectedClient(value)
    }

    return (
        <>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name='name'
                    type="text"
                    autoComplete='off'
                    onClick={handleClick}
                    onChange={handleChange}
                    autoFocus
                    required
                    defaultValue={ClientSelected}
                />
        {
            hide ? 
            <div className='select-container'>
            {
                client.map((ele)=>{
                    return <div onClick={()=>{handleSelectClick(ele.id)}}>
                    <small className='existing-client'>{ele.id}</small>
                 </div>
                })
            }
            </div>
            : ''
        }
        
        </>
    );
}

export default DynamicSelect;