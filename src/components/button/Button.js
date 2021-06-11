import React,{ lazy } from 'react';
import ReactDOM from 'react-dom'
import { Route } from 'react-router';
import './button.css'
export default function Button(props)
{
    return(
        <button type={props.type} onClick={props.onClick} className="button">
            {props.text}
        </button>
    );
}