import React,{useState} from 'react';
import './Dealcomponent.css';
import Dealmodal from './../Dealmodal/Dealmodal';

export default function Dealcomponent({deals})
{
    const [show, setShow] = useState(false);

    return deals.map((deal,index)=>{
        return(
             <div className='dealcomponent' onClick={() => setShow(true)}>
                <header className='deal-header'>
                    <h3>Deal {index+1} </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#18354A"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"/></svg>
                </header>
                <div className='information-container'>
                    <div className='inforow'>
                        <p className='info'>Client given purity</p>
                        <small className='value'>{deal.purity} P</small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Est thiruvani weight</p>
                        <small className='value'>{deal.estimatedProductWeight}</small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Final thiruvani weight</p>
                        <small className='value'>--</small>
                    </div>
                    <div className='inforow'>
                        <p className='info'>Balance </p>
                        <small className='value'>--</small>
                    </div>
                </div>
                <Dealmodal 
                    show={show}
                    onClose={() => setShow(false)} 
                    dealno= {`Deal ${index+1}`}
                    silvertype={deal.silvertype}
                    weight={deal.weight}
                    touch={deal.touch}
                    labourTouch={deal.labourTouch}
                    purity={deal.purity}
                    estimatedProductWeight={deal.estimatedProductWeight}
                />
            </div>
       );  
    });
}