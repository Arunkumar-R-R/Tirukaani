import React,{ useEffect, useState} from 'react';
import './Deal.css'
import Button from '../../components/Button/Button';
import InlineEditableInput from '../../components/EditableInput/InlineEditableInput';
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';


export default function Deal(props){

    const [show, setShow] = useState(false);
    const [finalThiruvaniWeight, setfinalThiruvaniWeight] = useState("");
    const [Thiruvanistatus, setThiruvanistatus] = useState("");

    function balancecal(finalThiruvaniWeight,esitmatedthiruvaniweight)
    {
        let balance;
        if(finalThiruvaniWeight > esitmatedthiruvaniweight )
        {
            balance = finalThiruvaniWeight - esitmatedthiruvaniweight;
        }else
        {
            balance = esitmatedthiruvaniweight-finalThiruvaniWeight; 
        }
        return balance;
    }

    function getthiruvanistatus(){
        let silverstatus = document.querySelector('input[name="silverstatus"]:checked');
        let status;
        if(silverstatus)
        {
            status = silverstatus.value;
        }
        setThiruvanistatus(status);
        setShow(false)
    }

    function setthemeforstatus(status){
        let obj = {
            'Not yet':'notyet',
            'In progress':'inprogress',
            Completed:'completed'
        }
        let statuscontent = status.textContent;
        if(obj[statuscontent] == obj['Not yet']){
            status.classList.remove(obj['In progress'],obj['Completed']);
            status.classList.add(obj[statuscontent]);
        }
        else if(obj[statuscontent] == obj['In progress']){
            status.classList.remove(obj['Not yet'],obj['Completed']);
            status.classList.add(obj[statuscontent]);
        }
        else
        {
            status.classList.remove(obj['In progress']);
            status.classList.add(obj[statuscontent]);
        }
    }

    useEffect(()=>{
        let status = document.querySelector('.thiruvanistatus');
        setthemeforstatus(status);
    },[Thiruvanistatus]);

    const { url } = useRouteMatch();
    const lasturl = url.substring(0, url.lastIndexOf('/'));

    return (
        <div className='wrapper'>
              <nav>
                    <Link to={`${lasturl}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" className=" icon-tabler-arrow-narrow-left" width="43" height="43" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#333333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="5" y1="12" x2="9" y2="16"></line>
                        <line x1="5" y1="12" x2="9" y2="8"></line>
                    </svg>
                    </Link>
                    <h3 className='dealname'> {props.location.state.deal.dealno} </h3>
             </nav>
             <div className='deal-container'>
             <div className='deal-info-container'>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>{props.location.state.deal.silvertype}</p>
                        <small className='dealvalue'>{props.location.state.deal.weight} x {props.location.state.deal.touch}</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'> purity</p>
                        <small className='dealvalue'>{props.location.state.deal.purity} <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 0 24 24" width="15px" fill="#18354A"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg></small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Est thiruvani weight</p>
                        <small className='dealvalue'>{props.location.state.deal.estimatedProductWeight}</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Final thiruvani weight </p>
                        <InlineEditableInput
                            text={finalThiruvaniWeight}
                            placeholder="---"
                            type="input"
                        >
                            <input
                                className='inlineinput'
                                type="number"
                                name="task"
                                placeholder=""
                                tabIndex="0"
                                value={finalThiruvaniWeight}
                                onChange={e => setfinalThiruvaniWeight(e.target.value)}
                                autoFocus
                            />
                        </InlineEditableInput>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Balance </p>
                        <small className='dealvalue'>{balancecal(finalThiruvaniWeight,props.location.state.deal.estimatedProductWeight)}</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Thiruvani status</p>
                        <small className='dealvalue thiruvanistatus' onClick={() => setShow(true)} >{Thiruvanistatus || '---'}</small>
                    </div>
             </div>
             <div className='button-sticky-button'>
             <Modal 
                            show={show}
                            onClose={() => setShow(false)} 
                        >
                            <div className='modal_form_element'>
                                <label className='radio-element' onClick={getthiruvanistatus}>
                                    <input type='radio' value='Not yet' name='silverstatus' required/> 
                                    <span className='small-text'>Not yet</span>
                                </label>
                                <label className='radio-element' onClick={getthiruvanistatus}>
                                    <input type='radio' value='In progress' name='silverstatus' required />
                                    <span className='small-text'>In progress</span>
                                </label>
                                <label className='radio-element' onClick={getthiruvanistatus}>
                                    <input type='radio' value='Completed' name='silverstatus' required />
                                    <span className='small-text'>Completed</span>
                                </label>
                            </div>
                        </Modal>
                 <Button type={'submit'} text={"Save"} />
             </div>
             </div>
        </div>
    );
}
