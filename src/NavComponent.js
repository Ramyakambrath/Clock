import React,{useState,useEffect} from 'react'
import { Navbar,
    NavbarBrand,
    Nav,
    NavItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock } from '@fortawesome/free-solid-svg-icons';

const NavComponent=()=>{



    return (
        <div className="header">
        <Navbar className="justify-content-center" bg="dark" variant="dark" >
        <NavbarBrand style={{fontSize:'2rem'}} >  <FontAwesomeIcon icon={faClock} style={{ fontSize: '1em', cursor:'pointer' ,color:'white'  }}/>  React Clock</NavbarBrand>
      
         </Navbar>  
        </div>

    )
}

export default NavComponent