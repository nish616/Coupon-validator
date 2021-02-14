import React,{useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useForm} from "react-hook-form";
import axios from "../axios";

function CreateCoupon(){
      const notify = (message) => toast(message);

      const {register , handleSubmit, errors} = useForm();

      function onSubmit(data){
        console.log(data);

        axios.post("/admin/createCoupon", {
            name : data.name,
            isActive : data.isActive,
            start : data.start,
            end : data.end,
            isPercent : data.isPercent,
            percent : data.percent,
            minAmount : data.minAmount,
            maxAmount : data.maxAmount,
            description : data.description
         }, {
           headers: {
             'Content-Type': 'application/json'
           }
         }).then((res) => {
           console.log(res);
           notify("Coupon created");
         })
         .catch((err) => {
           
           if(err){
             notify("Coupon creation failed ");
             console.log(err.message);
           } 
         });
      }
    
 
    const [disable, setDisable] = useState(false);
    
    function handleChange(event){
        const {name , value} = event.target;
        if(value === "false"){
            setDisable(true);
        }
        if(value === "true"){
            setDisable(false);
        }
    }

    return(
        <div className="container w-25">
        <form action="" method="" onSubmit={handleSubmit(onSubmit)} >
            <label className="form-label"> Name</label>
            <input className="form-control" type="text" name="name" ref={register}  />

            <label className="form-label"> Is Active </label>
            <input className="form-control" type="text" name="isActive" ref={register}   />

            <label className="form-label"> Start date </label>
            <input className="form-control" placeholder="yyyy-mm-dd" type="text" name="start" ref={register}   />

            <label className="form-label"> End date </label>
            <input className="form-control" placeholder="yyyy-mm-dd" type="text" name="end" ref={register}  />

            <div class="input-group mb-3 mt-4">
                <label class="input-group-text" for="inputGroupSelect01">Type</label>
                <select class="form-select" onChange={handleChange} id="inputGroupSelect01" name="isPercent" ref={register} required>
                    <option selected>Choose...</option>
                    <option name="isPercent" value="true">Percentage discount</option>
                    <option name="isPercent" value="false">Flast discount</option>
                </select>
            </div>

            <label className="form-label"> Percentage </label>
            <input className="form-control" type="text" name="percent" ref={register}   disabled={disable} />

            <label className="form-label"> Minimum cart amount </label>
            <input className="form-control" type="text" name="minAmount" ref={register}   />

            <label className="form-label"> Max discount value </label>
            <input className="form-control" type="text" name="maxAmount" ref={register}   />

            <label className="form-label"> Description </label>
            <input className="form-control" type="text" name="description" ref={register}   />

            <input className="btn btn-primary mb-3" type="submit" />
        </form>
        <ToastContainer />
    </div>
    )
}

export default CreateCoupon;