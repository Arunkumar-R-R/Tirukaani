import React from 'react';
import { NavLink } from 'react-router-dom';
import './Bottom_navigation.css'

export default function Bottom_navigation()
{
    return(
        <>
        <header className='bottom_navigation'>
                <NavLink
                activeStyle={{ backgroundColor: 'var(--hover-color)' }}
                to="/home"
                className='bottom_item'
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 8.70977L13.667 4.56177C13.199 4.19768 12.623 4 12.03 4C11.4371 4 10.861 4.19768 10.393 4.56177L5.05903 8.70977C4.73847 8.95905 4.47912 9.2783 4.30078 9.64312C4.12245 10.0079 4.02984 10.4087 4.03003 10.8148V18.0148C4.03003 18.5452 4.24074 19.0539 4.61582 19.429C4.99089 19.8041 5.4996 20.0148 6.03003 20.0148H18.03C18.5605 20.0148 19.0692 19.8041 19.4442 19.429C19.8193 19.0539 20.03 18.5452 20.03 18.0148V10.8148C20.03 9.99177 19.65 9.21477 19 8.70977Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 15C13.79 16.333 10.208 16.333 8 15" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='bottom_item_title'>Home</span>
                </NavLink>
                <NavLink
                activeStyle={{ backgroundColor: 'var(--hover-color)' }}
                to="/account"
                className='bottom_item'
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span className='bottom_item_title'>Account</span>
                </NavLink>
        </header>
        </>
    )
}