import React from "react";
import Button from "../components/Button";

function Form(props){
    return (
        <div className="">
            <form className = "">
                <div>
                    <label>{props.label1}</label>
                    <input type={props.type1}  />
                </div>
                <div>
                    <label>{props.label2} </label>
                    <input type={props.type2} />
                </div>
            </form>
        </div>
    )
}

export default Form;