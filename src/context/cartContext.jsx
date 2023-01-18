import React, {useState, createContext} from 'react';

const cartContext = createContext();

export default function CartContextProvider(props) {

    return(
        <cartContext.Provider value={{}}>
            {props.children}
        </cartContext.Provider>
        )
  
}

export {cartContext}