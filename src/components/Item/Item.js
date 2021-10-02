import React from 'react';
import './Item.css'

function Item() {

    function getItemType(type)
    {
        
    }
  

    return (
        <div className='item-container'>
            <h6 className='m-0'>
                Item 1
            </h6>
            <div className='item-type-select-container'>
                <label className='elements' onClick={()=>getItemType('Bar')}>
                    <input type='radio' value='Bar' name='silverform' /> 
                    <span className='small-text' >Bar</span>
                </label>
                <label className='elements'  onClick={()=>getItemType('Katcha')}>
                    <input type='radio' value='Katcha' name='silverform'  />
                    <span className='small-text'>Katcha</span>
                </label>
                <label className='elements' onClick={()=>getItemType('Katti')}>
                    <input type='radio' value='Katti' name='silverform' />
                    <span className='small-text'>Katti</span>
                </label>
            </div>
            <div className='form_element margin-15'>
                <label htmlFor="weight">Weight</label>
                <input
                id="weight"
                name='weight'
                type="number"
                required
                />
                <span id="weightError"  className='error'></span>
            </div>
            <div className='form_element margin-15'>
                <label htmlFor="touch">Touch</label>
                <input
                id="touch"
                name='touch'
                type="number"
                maxLength = "100"
                required
                />
             </div>
        </div>
    );
}

export default Item;