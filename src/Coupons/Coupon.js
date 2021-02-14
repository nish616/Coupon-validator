import React from "react";

function Coupon(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.description}</p>
    </div>
  );
}

export default Coupon;
