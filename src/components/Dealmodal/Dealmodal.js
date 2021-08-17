import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './Dealmodal.css';

import Button from '../../components/Button/Button';
import InlineEditableInput from '../../components/EditableInput/InlineEditableInput';
import { finalTouch, purity } from '../../utils/calculation';

export default function Dealmodal(props){
    const [showthiruvanistatusmodal, setshowthiruvanistatusmodal] = useState(false);
    const [finalThiruvaniWeight, setfinalThiruvaniWeight] = useState("");
    const [Thiruvanistatus, setThiruvanistatus] = useState("");

    // let silverType  = props.silvertype;
    // let weight = props.weight;
    // let touch = props.touch;
    // let labourTouch = props.labourTouch;
    // let tdeliverytouch = props.thiruvaniDeliveryTouch;
    // let totalTouch = props.finalTouch;
    // let estiproductpurity = props.purity;
    // let esitmatedThiruvaniWeight =props.estimatedProductWeight;
    

    // function balancecal(finalThiruvaniWeight,totaltouch,estiproductpurity)
    // {
    //     let balanceInPurity;
    //     if(finalThiruvaniWeight == 0 )
    //     {
    //         return 0;
    //     }else
    //     {
    //         let purityForThiruvani = purity(finalThiruvaniWeight,totaltouch);
    //         let thiruvanipurity = parseInt(purityForThiruvani);
    //         let estithiruvanipurity = parseInt(estiproductpurity);
         
    //         if( thiruvanipurity > estithiruvanipurity)
    //         {
    //              balanceInPurity =   thiruvanipurity - estithiruvanipurity 
    //         }
    //         else{
    //              balanceInPurity =  estithiruvanipurity - thiruvanipurity
    //         }

    //         return balanceInPurity;
    //     }  
    // }

    // function getthiruvanistatus(){
    //     let silverstatus = document.querySelector('input[name="silverstatus"]:checked');
    //     let status;
    //     if(silverstatus)
    //     {
    //         status = silverstatus.value;
    //     }
    //     setThiruvanistatus(status);
    //     setshowthiruvanistatusmodal(false);
    // }

    // function setthemeforstatus(status){
    //     let obj = {
    //         'Not yet':'notyet',
    //         'In progress':'inprogress',
    //         Completed:'completed'
    //     }
    //     let statuscontent = status.textContent;
    //     if(obj[statuscontent] == obj['Not yet']){
    //         status.classList.remove(obj['In progress'],obj['Completed']);
    //         status.classList.add(obj[statuscontent]);
    //     }
    //     else if(obj[statuscontent] == obj['In progress']){
    //         status.classList.remove(obj['Not yet'],obj['Completed']);
    //         status.classList.add(obj[statuscontent]);
    //     }
    //     else
    //     {
    //         status.classList.remove(obj['In progress']);
    //         status.classList.add(obj[statuscontent]);
    //     }
    // }

    // function closedealmodal(){
    //     props.onClose();
    // }

    // const showHideClassName = props.show ? " modal display-block" : " modal display-none";

    // useEffect(()=>{
    //     let status = document.querySelector('.thiruvanistatus');
    //     setthemeforstatus(status);
    // },[Thiruvanistatus]);

    // return ReactDOM.createPortal(
    //     <div className={showHideClassName} onClick={closedealmodal}>
    //          <div className='wrapper bottommodal' onClick={e => e.stopPropagation()} >
    //           <div className='dealmodalnav'>
    //                 <h3 className='dealname'> {props.dealno} </h3>
    //                 <div className='modal-close-btn'>
    //                     <svg  onClick={closedealmodal}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" className="close-btn" role="button">
    //                         <path d="M8.951 9.5c-.144 0-.279-.054-.387-.162L.662 1.436C.446 1.22.446.878.662.662c.216-.216.558-.216.774 0l7.902 7.902c.104.102.162.242.162.387 0 .145-.058.285-.162.387-.102.104-.241.163-.387.162zm-7.902 0c-.144 0-.279-.054-.387-.162C.558 9.236.5 9.096.5 8.951c0-.145.058-.285.162-.387L8.564.662c.216-.216.558-.216.774 0 .216.216.216.558 0 .774L1.436 9.338c-.102.104-.241.163-.387.162z">
    //                         </path>
    //                     </svg>
    //                 </div>
                   
    //          </div>
    //          <div className='deal-container'>
    //          <div className='deal-info-container'>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'>{silverType}</p>
    //                     <small className='dealvalue'>{weight} x {touch}</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'> purity</p>
    //                     <small className='dealvalue'>{estiproductpurity} P</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'> Labour Touch</p>
    //                     <small className='dealvalue'>{labourTouch} T</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'> Total Touch</p>
    //                     <small className='dealvalue'>{totalTouch} T</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'>Est thiruvani weight</p>
    //                     <small className='dealvalue'>{esitmatedThiruvaniWeight}</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'>Final thiruvani weight </p>
    //                     <InlineEditableInput
    //                         text={finalThiruvaniWeight}
    //                         placeholder="---"
    //                         type="input"
    //                     >
    //                         <input
    //                             className='inlineinput'
    //                             type="number"
    //                             name="task"
    //                             placeholder=""
    //                             tabIndex="0"
    //                             value={finalThiruvaniWeight}
    //                             onChange={e => setfinalThiruvaniWeight(e.target.value)}
    //                             autoFocus
    //                         />
    //                     </InlineEditableInput>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'>Balance </p>
    //                     <small className='dealvalue'>{balancecal(finalThiruvaniWeight,totalTouch,estiproductpurity)} P</small>
    //                 </div>
    //                 <div className=' dealinforow'>
    //                     <p className='dealinfo'>Thiruvani status</p>
    //                     <small className='dealvalue thiruvanistatus' onClick={() => setshowthiruvanistatusmodal(true)} >{Thiruvanistatus || '---'}</small>
    //                 </div>
    //                 <div className='buttongroup'>
    //                         <Button  type={'submit'} text={"Close"} onClick={closedealmodal} buttontype={'secondarybtn'} />
    //                         <Button type={'submit'} text={"Save changes"} buttontype={'primarybtn'} />
    //          </div> 
    //          </div>
            
    //          </div>
    //          <Modal 
    //                         showthiruvanistatusmodal={showthiruvanistatusmodal}
    //                         onClose={() => setshowthiruvanistatusmodal(false)} 
    //          >
    //                         <div className='modal_form_element'>
    //                             <label className='radio-element' onClick={getthiruvanistatus}>
    //                                 <input type='radio' value='Not yet' name='silverstatus' required/> 
    //                                 <span className='small-text'>Not yet</span>
    //                             </label>
    //                             <label className='radio-element' onClick={getthiruvanistatus}>
    //                                 <input type='radio' value='In progress' name='silverstatus' required />
    //                                 <span className='small-text'>In progress</span>
    //                             </label>
    //                             <label className='radio-element' onClick={getthiruvanistatus}>
    //                                 <input type='radio' value='Completed' name='silverstatus' required />
    //                                 <span className='small-text'>Completed</span>
    //                             </label>
    //                         </div>
    //                     </Modal>
    //     </div>             
    //     </div>
    // ,
    // document.getElementById("root"));

    return(
        <>
          <div className='dealmodalnav'>
                     <h3 className='dealname'> Deal </h3>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.55 4.5501L13.05 12.0501L20.5 19.5001C20.8 19.8001 20.8 20.2501 20.5 20.5501C20.2 20.8501 19.75 20.8501 19.45 20.5501L12 13.0501L4.54999 20.5501C4.24999 20.8501 3.79999 20.8501 3.49999 20.5501C3.19999 20.2501 3.19999 19.8001 3.49999 19.5001L10.95 12.0001L3.44999 4.5001C3.14999 4.2001 3.19994 3.80009 3.49994 3.50009C3.79994 3.20009 4.19999 3.1501 4.49999 3.4501L12 10.9501L19.5 3.4501C19.8 3.1501 20.25 3.1501 20.55 3.4501C20.85 3.7501 20.85 4.2501 20.55 4.5501Z" fill="#18354A"/>
                    </svg>  
           </div>
              <div className='deal-container'>
              <div className='deal-info-container'>
                     <div className=' dealinforow'>
                         <p className='dealinfo'>katcha</p>
                         <small className='dealvalue'>1500 x 70</small>
                     </div>
                     <div className=' dealinforow'>
                         <p className='dealinfo'> purity</p>
                         <small className='dealvalue'> P</small>
                     </div>
                     <div className=' dealinforow'>
                         <p className='dealinfo'> Labour Touch</p>
                         <small className='dealvalue'> T</small>
                     </div>
                     <div className=' dealinforow'>
                         <p className='dealinfo'> Total Touch</p>
                         <small className='dealvalue'> T</small>
                     </div>
                     <div className=' dealinforow'>
                         <p className='dealinfo'>Est thiruvani weight</p>
                         <small className='dealvalue'>---</small>
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
                                onChange={e => setfinalThiruvaniWeight(e.target.value)}
                                autoFocus
                            />
                        </InlineEditableInput>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Balance </p>
                        <small className='dealvalue'> P</small>
                    </div>
                    <div className=' dealinforow last-child'>
                        <p className='dealinfo'>Thiruvani status</p>
                        <small className='dealvalue thiruvanistatus' onClick={() => setshowthiruvanistatusmodal(true)} >{Thiruvanistatus || '---'}</small>
                    </div>
                    <div className='buttongroup'>
                            <Button type={'submit'} text={"Close"}  buttontype={'secondarybtn btn-width-fit-parent'} />
                            <Button type={'submit'} text={"Save changes"} buttontype={'primarybtn btn-width-fit-parent'} />
                    </div> 
             </div>
             </div>
        </>
    );

}