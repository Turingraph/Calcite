import React from "react";
import state_button_t from "../../types/components/ui/state_button_t";
import State_button from "../../../src/components/ui/state_button";

export default function Multi_button(
{
    button_arr,
}:{button_arr:state_button_t[]}
){
    let jsx_output = button_arr.map((i)=>{
        return <State_button 
                    title={i.title}
                    input_func={i.input_func}
                />
    })
    return <>{jsx_output}</>
}
