import React from "react";
import Transcation from "./Transaction";

export default function TransactionList(props) {
  const deleteTrans = props.deleteTransactions;
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {props.transactions.map((transaction) => {
          return (
            <Transcation
              key={transaction.id}
              transcation={transaction}
              deleteTrans={deleteTrans}
            />
          );
        })}
      </ul>
    </div>
  );
}
