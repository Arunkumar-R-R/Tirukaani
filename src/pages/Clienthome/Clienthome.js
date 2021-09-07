import React,{useState,useEffect} from 'react';
import Button from '../../components/Button/Button';
import FormModal from '../../components/FormModal/FormModal';
import Dealcomponent from '../../components/Dealcomponent/Dealcomponent';
import Dealmodal from '../../components/Dealmodal/Dealmodal';

import './Clienthome.css';
import {
    Link
  } from "react-router-dom";


export default function Clienthome(props)
{
    // let cdeal;

    // const [show, setShow] = useState(false);
    // const [dealmodalshow, setdealmodalshow ] = useState(false);
    // const [deals, setDeal] = useState([]);
    // const [individualdeal, setindividualdeal] = useState(cdeal);

    // let newDeal=[];

    // const addDeal = deal => {
    //     newDeal.push(deal);
    //     setDeal(newDeal);
    // };

    // function showdeal(deal)
    // {
    // //    console.log(deal);
    //    setdealmodalshow(true);
    //    setindividualdeal(deal) ;
    // }   
    // useEffect(()=>{
    //     if(deals.length>0)
    //     {
    //         newDeal = [...deals];
    //     }
    // },[newDeal]);
    let deals = [ { 
                    dealno:1,
                    purity:100,
                    estimatedProductWeight:1200
                   },
                   { 
                    dealno:2,
                    purity:200,
                    estimatedProductWeight:4344
                   },
                   { 
                    dealno:3,
                    purity:300,
                    estimatedProductWeight:23423
                   },
                   { 
                    dealno:4,
                    purity:300,
                    estimatedProductWeight:23423
                   },
                   { 
                    dealno:5,
                    purity:300,
                    estimatedProductWeight:23423
                   }
                ];

        return (
        <>
            {/* <div className='wrapper'>
                <div className='Clienthome-container'>
                <nav>
                    <Link to={'/'} >
                        <svg xmlns="http://www.w3.org/2000/svg" className=" icon-tabler-arrow-narrow-left" width="43" height="43" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#333333" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <line x1="5" y1="12" x2="9" y2="16"></line>
                            <line x1="5" y1="12" x2="9" y2="8"></line>
                        </svg>
                    </Link>
                
                    <h2 className='clientname'>{props.location.state.client}</h2>
                </nav>
                    <div className='deal-container'>
                    {
                       deals.length>0?deals.map((deal,index)=>{
                        deal.dealno = `${index+1}`;
                        return <Dealcomponent deal={deal} index={deal.dealno} showdeal={showdeal}/>
                    }):<h1 className='no-data-available'>No deal</h1>

                    }
                    </div>
                    <div className='button-sticky-button'>
                        <Button type={'button'} buttontype={'primarybtn'} text={"Add Deal"} onClick={() => setShow(true)}/> 
                        <FormModal 
                            onClose={() => setShow(false)}
                            show={show} 
                            onSubmit={addDeal} 
                            isThisAddNewClient={false} 
                            formposition={'content'} 
                            handleAddClientFormSubmit={false} 
                        />
                    </div>
                </div>
                {
                    dealmodalshow ?
                    <Dealmodal 
                    show={dealmodalshow}
                    onClose={() => setdealmodalshow(false)} 
                    dealno= {`Deal ${individualdeal.dealno}`}
                    silvertype={individualdeal.silvertype}
                    weight={individualdeal.weight}
                    touch={individualdeal.touch}
                    labourTouch={individualdeal.labourTouch}
                    thiruvaniDeliveryTouch={individualdeal.thiruvaniDeliveryTouch}
                    finalTouch={individualdeal.finalTouch}
                    purity={individualdeal.purity}
                    estimatedProductWeight={individualdeal.estimatedProductWeight}
                    />
                     :''
                }
            </div>  */}
            
                <div className='Clienthome-container'>
                <nav className='clienthome-nav'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" fill="white"/>
                    <path d="M13 20H27" stroke="#18354A" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 20L17 24" stroke="#18354A" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 20L17 16" stroke="#18354A" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 className='clientname-nav'>Client</h2>
                </nav>
                    <div className='deal-container'>
                    {
                       deals.length>0?deals.map((deal,index)=>{
                        deal.dealno = `${index+1}`;
                        return <Dealcomponent deal={deal} index={deal.dealno} />
                    }):<h1 className='no-data-available'>No deal</h1>

                    }
                    </div>
                </div>

        </>
       
    );
}
