import React,{useEffect} from 'react';
import Add_new_client from '../../components/client/add_new_client';
import Button from '../../components/button/Button';
import './form.css';
let obj={
    name:'',
    silvertype:'',
    weight:'',
    touch:'',
    labourtouch:'',
};

export default function Add_new_client_form(props)
{
    function validate(e)
    {
        e.preventDefault();
        let name = document.querySelector('#name').value;
        let silvertype = document.querySelector('input[name="silverform"]:checked').value;
        let weight = document.querySelector('#weight').value;
        let touch = document.querySelector('#touch').value;
        let labourtouch = document.querySelector('#labourTouch').value;
       
        obj.name = name;
        obj.silvertype = silvertype;
        obj.weight = weight;
        obj.touch = touch;
        obj.labourtouch = labourtouch;
        // props.clientsetter([props.clientarray,obj]);
        props.clientsetter.concat(obj);
        props.closemodal();
        // console.log(props.clientarray);
        }
    
    return(
        <div className='wrapper'>
            <h2>Adding new client</h2>
            <form>
                <Add_new_client/>
                <div className= 'submit_button'>
                    <Button type={'submit'} onClick={validate} text={"Create client"} />
                </div>
            </form>
        </div>
    );
}