import React from 'react';
import './Deal.css'
import Button from '../../components/Button/Button';

export default function Deal(){
    return (
        <div className='wrapper'>
            <nav>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" icon-tabler-arrow-narrow-left" width="43" height="43" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333333" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="5" y1="12" x2="9" y2="16"></line>
                        <line x1="5" y1="12" x2="9" y2="8"></line>
                    </svg>
                    <h3 className='dealname'>Deal</h3>
             </nav>
            <div className='deal-info-container'>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Bar</p>
                        <small className='dealvalue'>9142 x 63.45</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'> purity</p>
                        <small className='dealvalue'>4555 <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#18354A"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg></small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Est thiruvani weight</p>
                        <small className='dealvalue'>2.000</small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Final thiruvani weight </p>
                        <small className='dealvalue'> - </small>
                    </div>
                    <div className=' dealinforow'>
                        <p className='dealinfo'>Balance </p>
                        <small className='dealvalue'> - </small>
                    </div>
                    <div className='form_element'>
                <span className='radiolabel'>Thiruvani status</span>
                <label className='elements'>
                    <input type='radio' value='Bar' name='silverform' required/> 
                    <span className='small-text'>Not yet</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Spatla' name='silverform' required />
                    <span className='small-text'>Active</span>
                </label>
                <label className='elements'>
                    <input type='radio' value='Katcha' name='silverform' required />
                    <span className='small-text'>completed</span>
                </label>
              </div>

                {/* <label for="cars">Thiruvani status  <select name="cars" id="cars">
                    <option value="volvo">Not yet</option>
                    <option value="saab">Active</option>
                    <option value="mercedes">completed</option>
                </select></label> */}
                
              <Button type={'submit'} text={"Save"} />
             </div>
        </div>
    );
}