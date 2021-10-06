import React from 'react';
import './Deal.css';

export default function Deal({deal,index,openModal})
{
    return (
    <div className='dealcomponent' id={deal.id} key={deal.id}  onClick={()=>{openModal(deal.id)}}>
        <header className='deal-header'>
            <h3>Deal {index} </h3>
        </header>
        <div className='information-container'>
            <div className='inforow'>
                <p className='info'>Client given purity</p>
                <small className='value'>{deal.data.purity} P</small>
            </div>
            <div className='inforow'>
                <p className='info'>Est thiruvani weight</p>
                <small className='value'>{deal.data.estimatedProductWeight}</small>
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