import React, { useState } from "react";

export default function AddTransaction(props) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Add new transaction</h3>

      <div className="form-control">
        {" "}
        <label>Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
        />
      </div>

      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <button
        onClick={() => {
          const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            text,
            amount: +amount,
          };

          props.addTranscations(newTransaction);
          setAmount(0);
          setText("");
        }}
        className="btn"
      >
        Add transaction
      </button>
    </div>
  );
}
