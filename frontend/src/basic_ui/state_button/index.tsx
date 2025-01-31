import React, { JSX } from "react";
import state_button_type from "./type";
import Int_to_rgb from "../../hex_rgb/int_to_rgb";
export default function State_button<type>(
{
    title,
    ss_effect,
    setss_effect,
    rgb = [255, 255, 255]
}:state_button_type<type>
){
    return (<>
        <button 
            onClick={()=>{setss_effect(ss_effect)}} 
            style={{backgroundColor:Int_to_rgb({input:rgb})}}>
            {title}
        </button>
    </>);
}
