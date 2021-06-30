import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Dealmodal.css';

import Button from '../../components/Button/Button';
import InlineEditableInput from '../../components/EditableInput/InlineEditableInput';
import Modal from '../../components/Modal/Modal';
import { finalTouch,purity } from '../../utils/calculation';

export default function Dealmodal(props){
    const [showthiruvanistatusmodal, setshowthiruvanistatusmodal] = useState(false);
    const [finalThiruvaniWeight, setfinalThiruvaniWeight] = useState("");
    const [Thiruvanistatus, setThiruvanistatus] = useState("");

    let silverType  = props.silvertype;
    let weight = props.weight;
    let touch = props.touch;
    let totalTouch = finalTouch(props.touch,props.labourTouch);
    let estiproductpurity = props.purity;
    let labourTouch = props.labourTouch;
    let esitmatedThiruvaniWeight =props.estimatedProductWeight;


    function balancecal(finalThiruvaniWeight,totaltouch,estiproductpurity)
    {
        let balanceInPurity;
        if(finalThiruvaniWeight == 0 )
        {
            return 0;
        }else
        {
            let purityForThiruvani = purity(finalThiruvaniWeight,totaltouch);
            let thiruvanipurity = parseInt(purityForThiruvani);
            let estithiruvanipurity = parseInt(estiproductpurity);
         
            if( thiruvanipurity > estithiruvanipurity)
            {
                 balanceInPurity =   thiruvanipurity - estithiruvanipurity 
            }
            else{
                 balanceInPurity =  estithiruvanipurity - thiruvanipurity
            }

            return balanceInPurity;
        }  
    }

    function getthiruvanistatus(){
        let silverstatus = document.querySelector('input[name="silverstatus"]:checked');
        let status;
        if(silverstatus)
        {
            status = silverstatus.value;
        }
        setThiruvanistatus(status);
        setshowthiruvanistatusmodal(false)
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
    function closemodal(){
        props.onClose();
      }

    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    useEffect(()=>{
        let status = document.querySelector('.thiruvanistatus');
        setthemeforstatus(status);
    },[Thiruvanistatus]);

    return ReactDOM.createPortal(
        <div className={showHideClassName} onClick={closemodal}>
             <div className='wrapper bottommodal' onClick={e => e.stopPropagation()} >
              <nav className='dealmodalnav'>
                    <h3 className='dealname'> {props.dealno} </h3>
                    <div className='modal-close-btn'>
                        <svg  onClick={closemodal}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="close-btn" role="button">
                            <path d="M8.951 9.5c-.144 0-.279-.054-.387-.162L.662 1.436C.446 1.22.446.878.662.662c.216-.216.558-.216.774 0l7.902 7.902c.104.102.162.242.162.387 0 .145-.058.285-.162.387-.102.104-.241.163-.387.162zm-7.902 0c-.144 0-.279-.054-.387-.162C.558 9.236.5 9.096.5 8.951c0-.145.058-.285.162-.387L8.564.662c.216-.216.558-.216.774 0 .216.216.216.558 0 .774L1.436 9.338c-.102.104-.241.163-.387.162z">
                            </path>
                        </svg>
                    </div>
             </nav>
             <div className='deal-container'>
             <div className='deal-info-container'>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>{silverType}</p>
                        <small className='dealvalue'>{weight} x {touch}</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'> purity</p>
                        <small className='dealvalue'>{estiproductpurity} P</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'> Labour Touch</p>
                        <small className='dealvalue'>{labourTouch} T</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'> Total Touch</p>
                        <small className='dealvalue'>{totalTouch} T</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Est thiruvani weight</p>
                        <small className='dealvalue'>{esitmatedThiruvaniWeight}</small>
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
                        <small className='dealvalue'>{balancecal(finalThiruvaniWeight,totalTouch,estiproductpurity)} P</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Thiruvani status</p>
                        <small className='dealvalue thiruvanistatus' onClick={() => setshowthiruvanistatusmodal(true)} >{Thiruvanistatus || '---'}</small>
                    </div>
             </div>
             </div>
             <div className='buttongroup'>
                            <Button  type={'submit'} text={"Close"} onClick={closemodal} buttontype={'secondarybtn'} />
                            <Button type={'submit'} text={"Save changes"} buttontype={'primarybtn'} />
             </div>
        </div>
        <Modal 
                            show={showthiruvanistatusmodal}
                            onClose={() => setshowthiruvanistatusmodal(false)} 
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
                        
        </div>
    ,
    document.getElementById("root"));

}