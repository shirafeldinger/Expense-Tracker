import React from "react";

export default function Balance(props) {
  const total = props.amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}
