import React from "react";
import multi_button_t from "./type";
import State_button from "../../basic_ui/state_button";

export default function Multi_button(
{
    button_array,
}:multi_button_t
){
    let jsx_output = button_array.map((i)=>{
        return <State_button 
                    title={i.title}
                    input_function={i.input_function}
                />
    })
    return <>{jsx_output}</>
}
