import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import { useAuth } from '../../Context/AuthProvider';
import Button from './../../components/Button/Button';
import './Account.css'

export default function Account(){

    const [error, setError] = useState("");
    const { logout } = useAuth();
    const history = useHistory();

    async function handleLogout(){
        try{
            await logout();
            history.push('/')
        }catch{
            setError('Failed to logout');
        }
    }

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
                <Button className='' onClick={handleLogout} type={'submit'} text={'Log out'} buttontype={'secondarybtn'} ></Button>
                {error && <Toast type='alert-danger' text={error}></Toast>}
            </div>
        </div>

    );
}