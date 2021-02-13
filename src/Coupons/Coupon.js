import React from "react";

function Coupon(props) {
  return (
    <div className="coupon">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Coupon;
