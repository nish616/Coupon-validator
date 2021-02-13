import React, { useState, useEffect } from "react";
import axios from "../axios";

function Checkout() {
  
  const [inputFields, setInputFields] = useState({
    cartTotal : "",
    couponName : ""
  });
  const [discount , setDiscount] = useState();

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
      if(err) console.log(err);
    });
    
    //event.preventDefault();
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
    <div className="">
      
        <div>
           <label> Cart Total</label>
           <input type="text" name="cartTotal" onChange={handleChange} value={inputFields.cartTotal} />
        </div>
        <div>
          <label> Coupon Code </label>
            <input type="text" name="couponCode" onChange={handleChange} value={inputFields.couponCode} />
        </div>
        <button type="button" onClick={validateCoupon}>Submit</button>
     
      <p className="discount">Discounted Value={discount}</p>

    </div>
  );
}

export default Checkout;
