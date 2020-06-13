import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.js';

//This is the Initial State with dummy values
const InitialState = {
    transactions: []
}

//Create Context
export const GlobalContext = createContext(InitialState);

//Provider Component for giving Access to our functions to dummy values
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, InitialState);

function deleteTransaction(id){
  dispatch({
    type: 'DELETE_Transaction',
    payload: id
  });
}

function AddTransaction(transaction){
  dispatch({
    type: 'Add_Transaction',
    payload: transaction
  });
}
  
    return (
      <GlobalContext.Provider value={{transactions: state.transactions,
      deleteTransaction,AddTransaction}}>
        {children}
      </GlobalContext.Provider>
    );
  }