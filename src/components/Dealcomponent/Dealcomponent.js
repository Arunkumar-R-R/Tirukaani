import React from 'react';
import './Dealcomponent.css';

export default function Dealcomponent({deal,index,showdeal})
{
    return (
    <div className='dealcomponent' id={`deal${index}`} key={`deal${index}`}  onClick={()=>{showdeal(deal)}}>
        <header className='deal-header'>
            <h3>Deal {index} </h3>
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
    </div>);
}