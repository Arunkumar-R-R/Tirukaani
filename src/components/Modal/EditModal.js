import React from 'react';
import Button from '../Button/Button';
import './modal.css';

export default function EditModal(){
    return (
        <>
         <div className='b-modal modal display-block' >
                 <div className='bottom'  onClick={e => e.stopPropagation()}>
                    <div className='modal-nav'>
                        <h3>Edit client name</h3>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z" fill="#18354A"/>
                        </svg>
                    </div>
                    <div>
                        <form>
                            <label>Name</label>
                            <input type='text' required></input>
                            <Button type={'submit'} text={'Save'} buttontype={'primarybtn'} ></Button>
                        </form>
                    </div>
                </div> 
        </div>
        </>
    );
}