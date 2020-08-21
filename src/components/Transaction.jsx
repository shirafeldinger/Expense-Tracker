import React from "react";

export default function Transaction(props) {
  const sign = props.transcation.amount < 0 ? "-" : "+";
  return (
    <li className={props.transcation.amount < 0 ? "minus" : "plus"}>
      {props.transcation.text}
      <span>
        {sign}${Math.abs(props.transcation.amount)}
      </span>
      <button
        onClick={() => props.deleteTrans(props.transcation.id)}
        className="delete-btn"
      >
        X
      </button>
    </li>
  );
}
