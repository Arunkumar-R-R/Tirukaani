import React, { useEffect } from 'react';
import './Item.css'

function Item({inputList,handleRemove,setInputList}) {
    console.log(inputList,'input')
    const handleItemClick = (e,i) =>{
        e.stopPropagation();
        let clickedItemType = e.target.type;
        if(clickedItemType === 'radio'){
            console.log(e.target)
            const { id, value } = e.target;
            const list = [...inputList];
            list[i][id] = value;
            setInputList(list);
        }
        if(clickedItemType === 'number'){
            const { name, value } = e.target;
            const list = [...inputList];
            list[i][name] = value;
            setInputList(list);
        }
    }

    const renderCheckedRadio = (x,i)=>{
        let silvertype = document.querySelectorAll(`input[name='silverType${i}']`);
        let selectedSilverType = Object.values(x)[2];
        if(silvertype!==null){
            silvertype.forEach(ele=>{
                if(ele.value === selectedSilverType){
                    ele.checked = true;
                }  
            });
        }
    }
    
    return (
        <>
        {
            inputList.map((x, i) => {
               return (
                     <fieldset key={i.toString()} className='item-container'>
                         <header className='flex flex-row justifycontent-spacebetween alignitems-center mb-2'>
                           <legend >
                           Item {i+1} :    
                           </legend>
                           {
                                i+1 > 1 ?
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
                         {
                            renderCheckedRadio(x,i)
                         }
                         <div className='item-type-select-container'>
                            <label className='elements' >
                                <input type='radio' value='Katcha' id='silverType' name={`silverType${i}`} onClick={e => handleItemClick(e,i)} />
                                <span className='small-text'>Katcha</span>
                            </label>
                            <label className='elements' >
                                <input type='radio' value='Bar' id='silverType' name={`silverType${i}`} onClick={e => handleItemClick(e,i)}/> 
                                <span className='small-text' >Bar</span>
                            </label>
                            <label className='elements'>
                                <input type='radio' value='Katti' id='silverType' name={`silverType${i}`} onClick={e => handleItemClick(e,i)}/>
                                <span className='small-text' >Katti</span>
                            </label>
                         </div>
                
                         <div className='form_element margin-15'>
                            <label htmlFor="weight">Weight</label>
                            <input
                             id={`weight${i}`}
                             name='weight'
                             type="number"
                             value={x.weight}
                             onChange={e => handleItemClick(e, i)}
                            required
                            />
                        </div>
                        <div className='form_element margin-15'>
                            <label htmlFor="touch">Touch</label>
                            <input
                            id={`touch${i}`}
                            name='touch'
                            type="number"
                            value={x.touch}
                            onChange={e => handleItemClick(e, i)}
                            maxLength = "100"
                            required
                            />
                        </div>
                     </fieldset>     
               );
                 
              })
      }
      </>
    );
}

export default Item;
