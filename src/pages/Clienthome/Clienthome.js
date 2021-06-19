import React,{useState} from 'react';
import Button from '../../components/Button/Button';
import FormModal from '../../components/FormModal/FormModal';
import './Clienthome.css';
import Home from '../Home/Home';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'



export default function Clienthome(Prop)
{
    const [show, setShow] = useState(false);
    function goback()
    {   
        // ReactDOM.render(<Home/>, document.getElementById('root'));
        return <Link to={'/'}/>
    }
    return (
        <>
            
            <div className='wrapper'>
                <div className='Clienthome-container'>
                <nav>
                    {/* <Link to={'/'} >
                        <svg xmlns="http://www.w3.org/2000/svg" className=" icon-tabler-arrow-narrow-left" width="43" height="43" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333333" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <line x1="5" y1="12" x2="9" y2="16"></line>
                            <line x1="5" y1="12" x2="9" y2="8"></line>
                        </svg>
                    </Link> */}
                     <svg onClick={goback} xmlns="http://www.w3.org/2000/svg" className=" icon-tabler-arrow-narrow-left" width="43" height="43" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333333" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <line x1="5" y1="12" x2="9" y2="16"></line>
                            <line x1="5" y1="12" x2="9" y2="8"></line>
                        </svg>
                    <h2 className='clientname'>{Prop.clientname}</h2>
                </nav>
                    <div className='deal-container'>
                        <h1 className='no-data-available'>No deal</h1>
                    </div>
                    <div className='button-sticky-button'>
                        <Button type={'button'} text={"Add Deal"} onClick={() => setShow(true)}/> 
                        <FormModal onClose={() => setShow(false)} show={show}  />
                    </div>
                </div>
            </div> 
        </>
       
    );
}