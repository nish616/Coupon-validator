import React, { useState, useEffect } from "react";
import axios from "../axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Validate() {
  
  const [inputFields, setInputFields] = useState({
    cartTotal : "",
    couponName : ""
  });
  const [discount , setDiscount] = useState("");

  useEffect(() => {
    setDiscount("");
  },[inputFields.cartTotal,inputFields.couponName]);

  const notify = () => toast("Coupon not Applicable!");

  function validateCoupon(event) {
    axios.post("/checkout/validateCoupon", {
       cartTotal : inputFields.cartTotal,
       couponName : inputFields.couponName
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res);
      setDiscount(res.data.Discount);
    })
    .catch((err) => {
      
      if(err){
        notify();
        console.log(err.message);
      } 
    });
    
  }   

  function handleChange(event){
    const { name: fieldName, value: fieldValue } = event.target;

    setInputFields((prevValue) => {
      if (fieldName === "cartTotal") {
        return {
          cartTotal: fieldValue,
          couponName: prevValue.couponName
        };
      } else if (fieldName === "couponCode") {
        return {
          cartTotal: prevValue.cartTotal,
          couponName: fieldValue
        };
      }
    });
  }

  

  return (
    <div className="container w-25">
      
        <div className="">
           <label className="form-label"> Cart Total</label>
           <input className="form-control" type="text" name="cartTotal" onChange={handleChange} value={inputFields.cartTotal} />
        </div>
        <div>
          <label className="form-label"> Coupon Code </label>
            <input className="form-control" type="text" name="couponCode" onChange={handleChange} value={inputFields.couponCode} />
        </div>
        <button className="btn btn-primary mb-3" type="button" onClick={validateCoupon}>Submit</button>
      <p className="form-label">{`Discounted Value=${discount}`}</p>
      <ToastContainer />
    </div>
  );
}

export default Validate;
