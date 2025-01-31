import React, { JSX } from "react";
import state_button_type from "./type";

export default function State_button<type>(
{
    title,
    ss_input,
    setss_input
}:state_button_type<type>
){
    return (<>
<button onClick={()=>{setss_input(ss_input)}}>{title}</button>
</>);
}
