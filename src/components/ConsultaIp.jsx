import React from 'react'
import {useState} from 'react';
import { consultaDeIp } from '../Service/firestore';

function ConsultaIp() {
  const [nodo,setNodo]=useState();
  const [nodoConsultado,setNodoConsultado]=useState("");

  function cambioNodo(e) {
    setNodo(e.target.value)
  }

  async function ejecutarConsulta(nodo){
    try{
      setNodoConsultado(await consultaDeIp(nodo))
    } catch(error){
      alert("ERROR AL SELECCIONAR UN NODO")
    }    
  }

  return (
    <div className="contenedorPrincipal d-flex flex-column">
      <div className='contenedor d-flex flex-wrap justify-content-center'>
        <label for="nodos">
          <p className='col-12 text-center'>Nodos: </p>
          <select name="nodos" id="nodos" value={nodo} onChange={cambioNodo}>
            <option selected  disabled>--Seleccione un Nodo--</option>
            <option value="Las Heras">Las Heras</option>
            <option value="La Jirafa">La Jirafa</option>
            <option value="PDM">Pueblo de Montaña</option>
            <option value="Vistalba">Vistalba</option>
            <option value="R60">Ruta 60</option>
            <option value="Multirepuesto">Multirepuesto</option>
            <option value="Soeva">Soeva</option>
            <option value="Batalla Del Pilar">Batalla del Pilar</option>
            <option value="Decavial">Decavial</option>
            <option value="Ejercito">Ejercito</option>
            <option value="Jesus Nazareno">Jesus Nazareno</option>
            <option value="Maipu">Maipu</option>
            <option value="Corralitos-CBombal">Corralitos-CBombal</option>
            <option value="Potrerillos">Potrerillos</option>
            <option value="Tunuyan">Tunuyan</option>
            <option value="LosCerrillos">Los Cerrillos</option>
            <option value="Carrizal">Carrizal</option>
            <option value="Panel2">Panel 2</option>
            <option value="Panel3">Panel 3</option>
            <option value="Panel4">Panel 4</option>
            <option value="Panel5">Panel 5</option>
            <option value="Panel6">Panel 6</option>
            <option value="Panel8">Panel 8</option>
            <option value="Panel10">Panel 10</option>
            <option value="Panel11">Panel 11</option>
            <option value="Panel12">Panel 12</option>
            <option value="Panel13">Panel 13</option>
            <option value="Panel14">Panel 14</option>       
          </select>           
        </label>
      </div>
      <div className='d-flex flex-wrap justify-content-center m-4'>
          <p className='col-12 text-center'>{nodoConsultado.primer}.{nodoConsultado.segundo}.{nodoConsultado.tercer}.{nodoConsultado.cuarto}</p>
      </div>
      <div className='d-flex justify-content-center'>
          <button onClick={()=>ejecutarConsulta(nodo)}>CONSULTAR</button>
      </div>
    </div>
  )
}

export default ConsultaIp