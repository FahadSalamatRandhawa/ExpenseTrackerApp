import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/IncomeExpenseview';
import { TransactionList } from './components/Transactionhistory';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider className="room">
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
