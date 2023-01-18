import React from 'react';
import { altaDeIp } from '../Service/firestore';
import Ips from '../components/Ips'

function AltaIp() {

  return (
    <>
    <Ips function={altaDeIp} nombre="ALTA"></Ips>
    </>
  )
}

export default AltaIp