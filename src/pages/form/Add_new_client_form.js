import React,{useEffect} from 'react';
import Add_new_client from '../../components/client/add_new_client';
import Button from '../../components/button/Button';
import './form.css';

export default function Add_new_client_form(props)
{
    function validate(e)
    {
        e.preventDefault();
    }
    
    return(
        <div className='wrapper'>
            {/* <div className='flex modal-header'>
                <h2>Adding new client</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="close-btn" data-cy="dropdown-close-button" data-name="exit" fill="currentColor" role="button"><path d="M8.951 9.5c-.144 0-.279-.054-.387-.162L.662 1.436C.446 1.22.446.878.662.662c.216-.216.558-.216.774 0l7.902 7.902c.104.102.162.242.162.387 0 .145-.058.285-.162.387-.102.104-.241.163-.387.162zm-7.902 0c-.144 0-.279-.054-.387-.162C.558 9.236.5 9.096.5 8.951c0-.145.058-.285.162-.387L8.564.662c.216-.216.558-.216.774 0 .216.216.216.558 0 .774L1.436 9.338c-.102.104-.241.163-.387.162z"></path></svg>
            </div> */}
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