import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Income from "./components/Income";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransaction] = useState([]);

  const amounts = transactions.map((transaction) => transaction.amount);

  const addTranscations = (newTranscation) => {
    setTransaction([...transactions, newTranscation]);
  };

  const deleteTransactions = (id) => {
    const sortTrans = transactions.filter((trasaction) => trasaction.id !== id);
    setTransaction([...sortTrans]);
  };
  return (
    <div>
      <Header />
      <div className="container">
        <Balance amounts={amounts} />
        <Income amounts={amounts} />
        <TransactionList
          transactions={transactions}
          deleteTransactions={deleteTransactions}
        />
        <AddTransaction addTranscations={addTranscations} />
      </div>
    </div>
  );
}

export default App;
