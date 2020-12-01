import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendar } from '@fortawesome/free-solid-svg-icons';

const Panel=(props)=>{

    return (

        <div className="panel">
        <label className="switch">
           <input type="checkbox" checked={props.isActive} onChange={props.toggle}/>
           <span className="slider round"></span>
        </label>
        <FontAwesomeIcon icon={faCalendar} style={{ fontSize: '2em', cursor:'pointer' ,color:'#black'  }}/>
        </div>
    )


}

export default Panel