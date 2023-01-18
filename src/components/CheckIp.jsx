import React from 'react';
import { checkearIp } from '../Service/firestore';
import Ips from '../components/Ips';

function CheckIp() {
    return (
        <>
        <Ips function={checkearIp} nombre="CHEQUEAR"></Ips>
        </>
    )
}

export default CheckIp