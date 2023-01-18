import React from 'react';
import { altaDeIp } from '../Service/firestore';

function Ips(props) {
    let primero;
    let segundo;
    let tercero;
    let cuarto;
    
    function check(e){
      if( e.target.value >= 256){
          e.target.value = 255
      }
      if( e.target.value <= 0){
          e.target.value = 0
      }
    
      if(e.target.name=="primero"){
        primero=e.target.value
      }else if(e.target.name=="segundo"){
          segundo=e.target.value
      }else if(e.target.name=="tercero"){
          tercero=e.target.value
      }else if(e.target.name=="cuarto"){
          cuarto=e.target.value
      }
      primero = parseInt(primero)
      segundo = parseInt(segundo)
      tercero = parseInt(tercero)
      cuarto = parseInt(cuarto)
    }
    
    async function ejecutarFuncion(primero, segundo, tercero, cuarto){
      try{
        await props.function(primero, segundo, tercero, cuarto)
      }catch(e){
        alert(e)
      } 
    }
    
    return (
      <>
      <div className="contenedorPrincipal d-flex flex-column">
        <div className='contenedor d-flex flex-wrap justify-content-center'>
            <p className='col-12 text-center'> IP</p>
            <input onChange={check} name="primero" type="number" min="0" max="255"></input>
            <input onChange={check} name="segundo" type="number" min="0" max="255"></input>
            <input onChange={check} name="tercero" type="number" min="0" max="255"></input>
            <input onChange={check} name="cuarto" type="number" min="0" max="255"></input>
        </div>
        <div className='d-flex justify-content-center m-4'>
            <button  onClick={()=>ejecutarFuncion(primero, segundo, tercero, cuarto)}> {props.nombre}</button>
        </div>
      </div>
      
    </>
    )
}

export default Ips

