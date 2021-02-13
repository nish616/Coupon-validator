import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import axios from "../axios";

function Checkout() {
  const [discount , setDiscount] = useState([]);

  useEffect(() => {
    
  },[]);

  async function validateCoupon(newNote) {
     axios.post("/", {
      name : newNote.title
    }, {
     headers: {
       'Content-Type': 'application/json'
     }
    }).then((res) => {console.log(res)}).catch((err) => {console.log(err)});

  }   

  return (
    <div className="">
      <Form
      label1 ="Total Amount"
      label2 = "Coupon code"
      type1 = "text" 
      type2 = "text" 
      />
      <p className="discount">{discount}</p>
      <Button
      button = "submit"
      onClick = {validateCoupon} 
      />
    </div>
  );
}

export default Checkout;
