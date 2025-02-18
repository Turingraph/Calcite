import React from "react";
import * as a from "../../type/alias";
import { opt_input_uit } from "../opt/type";
import {Str_to_h, Opt_to_jsx_arr} from "../../function/convert";
import Opt_input from "../opt/opt_input";
import Input_form from "./input_form";

export type input_combine_uit = {
    opt_name?:a.opt_name,
    input_str?:undefined|a.use_state_uit<string|number>[],
    input_opt?:undefined|opt_input_uit[]
    func_activate?:a.func_event,
    is_undo?:boolean
}

export default function Input_combine({
    opt_name,
    input_str,
    input_opt,
    func_activate,
    is_undo = false
}:input_combine_uit){
    const JAX_INPUT_OPT = Opt_to_jsx_arr({arr:input_opt, jsx_element:Opt_input})
    let jsx_input_str = <></>
    let let_input_str:a.use_state_uit<string|number>[] = []
    if (input_str !== undefined){
        let_input_str = input_str.map((item:a.use_state_uit<string|number>)=>{
            return {
                opt_name:item.opt_name,
                ss:item.ss,
                setss:item.setss
            }
        })
        jsx_input_str = <Input_form
            arr = {let_input_str}
            func_activate={func_activate}
            is_undo={is_undo}
        />
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        {JAX_INPUT_OPT}
        {jsx_input_str}
    </>
}
