import React from "react";
import multi_button_t from "./type";
import State_button from "../../basic_ui/state_button";

export default function Multi_button(
{
    button_arr,
}:multi_button_t
){
    let jsx_output = button_arr.map((i)=>{
        return <State_button 
                    title={i.title}
                    input_function={i.input_function}
                />
    })
    return <>{jsx_output}</>
}
