import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
const [text, setText]= useState('');
const [amount, setAmount] = useState (0);

const {AddTransaction}=useContext(GlobalContext);

const onSubmit = e => {
  e.preventDefault();

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
  }

  AddTransaction(newTransaction);
}

    return (
      <div>
        <h3>Add a new transaction!</h3>
        <form onSubmit={onSubmit}>
          <div className="form-controll">
            <label htmlFor="text">Tag</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}
            placeholder="Enter text ...."
            />
          </div>
          <div className="form-controll">
            <label htmlFor="amount">
              Amount
              <br />
              (Negative-expense,Positive-income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount ..."
            />
          </div>
          <button className="btn">Finalize Transaction</button>
        </form>
      </div>
    )
  }