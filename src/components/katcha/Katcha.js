import React from 'react';

function Katcha({inputList,handleRemove,setInputList}) {

    const handleInputChange = (e, i) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[i][name] = value;
        setInputList(list);
      };

    return (
        <div>
                       {
                             inputList.map((x, i) => {
                                return (
                                      <fieldset key={i.toString()}>
                                          <header className='flex flex-row justifycontent-spacebetween alignitems-center mb-2'>
                                            <legend >
                                            Katcha {i} :    
                                            </legend>
                                            {
                                                i > 0 ?
                                                <div onClick={()=>handleRemove(i)} id={`${i}`} className='remove-input'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#18354A" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <line x1="4" y1="7" x2="20" y2="7" />
                                                    <line x1="10" y1="11" x2="10" y2="17" />
                                                    <line x1="14" y1="11" x2="14" y2="17" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                    </svg>
                                                </div> 
                                                :''
                                            }
                                          </header>
                                          <div className='flex dynamic-input flex-column'>
                                              <label htmlFor="weight">Weight</label>
                                              <input className='weightinput'
                                              id={`weight${i}`}
                                              name='weight'
                                              type="number"
                                              value={x.weight}
                                              onChange={e => handleInputChange(e, i)}
                                              required
                                              /> 
                                          </div>
                                          <div  className='flex dynamic-input flex-column mt-2'>
                                              <label htmlFor="touch">Touch</label>
                                              <input className='touchinput'
                                              id={`touch${i}`}
                                              name='touch'
                                              type="number"
                                              value={x.touch}
                                              onChange={e => handleInputChange(e, i)}
                                              required
                                              />
                                          </div>
                                      </fieldset>     
                                );
                                  
                               })
                       }
                              
        </div>
    );
}

export default Katcha;