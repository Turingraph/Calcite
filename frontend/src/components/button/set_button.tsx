import React from "react";
import * as a from "../../type/alias"
import Click_button from "./click_button";

export default function Set_button<t>({
    name = "ok" as a.name,
    arr,
    input,
    func_addition = (()=>{undefined}) as a.func_event
}:{
    name?:a.name
    arr:a.use_state_t<t>[],
    input:t[]
    func_addition?:a.func_event
}){
    function func_update(){
        arr.map((item,index)=>{item.setss(input[index])})
        func_addition()
    }
    return <Click_button name={name} func_event={(()=>{func_update}) as a.func_event}/>
}