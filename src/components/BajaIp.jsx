import React from 'react'
import { bajaDeIp } from '../Service/firestore';
import Ips from '../components/Ips'

function BajaIp() {
  return (
    <>
    <Ips function={bajaDeIp} nombre="BAJA"></Ips>
    </>
  )
}

export default BajaIp