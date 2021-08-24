import React from 'react';
import Button from './../../components/Button/Button';
import './Account.css'

export default function Account(){
    return (
        <div className='container'>
            <h2 className='title'>Account</h2>
            <div className='mini-container'>
                <h3>Export</h3>
                <span className='export-description'>Export whole data into csv file</span>
                <Button className='' type={'submit'} text={'Export data'} buttontype={'primarybtn'} ></Button>
            </div>
            <div  className='mini-container'>
                <h3>Logout of the app</h3>
                <Button className='' type={'submit'} text={'Log out'} buttontype={'secondarybtn'} ></Button>
            </div>
        </div>

    );
}