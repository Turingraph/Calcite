import React from "react";
import * as a from "../../type/alias"
import { func_update_arr } from "../../utils/handle";
import Click_button from "./click_button";

export default function Set_button<t>({
    name = "ok" as a.name,
    index,
    arr,
    input,
    func_addition = (()=>{undefined}) as a.func_event
}:{
    name?:a.name
    index:number,
    arr:a.use_state_t<t[]>,
    input:t
    func_addition?:a.func_event
}){
    function func_update(){
        let update_arr = [...arr.ss]
        update_arr[index] = input
        arr.setss(update_arr)
        func_addition()
    }
    return <Click_button name={name} func_event={(()=>{func_update}) as a.func_event}/>
}