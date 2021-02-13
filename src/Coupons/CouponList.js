import React,{useState, useEffect} from "react";
import axios from "../axios";
import Coupon from "../Coupons/Coupon";
import { v4 as uuidv4 } from 'uuid';

function CouponList() {

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request =  await axios.get("/store/getCoupons");
      console.log(request);
      setCoupons(request.data);
      return request;
    }
    fetchData().catch((err) => console.log(err));
  });

  return (
    <div className="">
    <h1> Coupon List</h1>
    {coupons.map((item) => {
      return(
        <Coupon
        key = {uuidv4()}
        name = {item.name}
        description = {item.description} 
        />
      );
    })}
      
    </div>
  );
}

export default CouponList;
