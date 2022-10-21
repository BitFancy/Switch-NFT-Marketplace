import React from "react";
import "./styles.css";

function TheCard(props) {
  return (
    <div className="card-element">
      <div style={{ width: "18rem" }}>
        <img src={props.image} alt="nft" />
        <h5>{props.title}</h5>
        <p>Current Bid:</p>
        <h5>{props.price}</h5>
        <hr />
        <img className="switch-logo" src={props.logo} alt="logo" />
      </div>
    </div>
  );
}

export default TheCard;
