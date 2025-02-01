import React, { JSX } from "react";
import state_button_t from "./type";
import Int_to_rgb from "../../hex_rgb/int_to_rgb";
export default function State_button(
{
    title,
    input_function,
}:state_button_t
){
    // onMouseDown={()=>{setss_effect(ss_effect)}} 
    return (<>
        <button onClick={()=>{input_function}} >
            {title}
        </button>
    </>);
}
