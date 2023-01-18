import  React, { useState } from 'react';
import logo from '../img/logo.png'
import {Link} from "react-router-dom";

function NavBar() {

  return (
    <header className='header d-flex flex-row'>
        <div className='d-flex flex-col'>
          <img src={logo} className='col-6' />
        </div>
        <div className='d-flex flex-row align-items-center justify-content-evenly'>
          <Link to="/checkip" className='enlace fw-bold p-1'> CHECK IP </Link>
          <Link to="/alta" className='enlace fw-bold p-1'> UP IP </Link>
          <Link to="/baja" className='enlace fw-bold p-1'> DOWN IP </Link>
          <Link to="/consulta" className='enlace fw-bold p-1'> GET IP </Link>
        </div> 
        
    </header>
  )
}

export default NavBar