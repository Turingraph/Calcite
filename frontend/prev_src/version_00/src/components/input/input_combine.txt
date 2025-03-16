import React from "react";
import * as a from "../../type/alias";
import { opt_input_uit } from "../opt/type";
import {STR_TO_H} from "../../utility/convert";
import OPT_INPUT from "../opt/opt_input";
import INPUT_FORM from "./input_form";
import "./index.css"

export type input_combine_uit = {
    opt_name?:a.opt_name,
    input_str?:undefined|a.use_state_uit<string|number>[],
    input_opt?:undefined|opt_input_uit[]
    func_activate?:a.func_event,
    is_undo?:boolean
}

export default function INPUT_COMBINE({
    opt_name,
    input_str,
    input_opt,
    func_activate,
    is_undo = false
}:input_combine_uit){
    let jsx_input_opt = [<></>]
    if (input_opt !== undefined){
        jsx_input_opt = input_opt.map((item:opt_input_uit, index:number)=>{
            return <div key={index}>
                <OPT_INPUT
                opt_name={item.opt_name}
                available_opts={item.available_opts}
                ss_mode={item.ss_mode}
                is_search_bar={item.is_search_bar}
                />
                </div>
        })
    }
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
        jsx_input_str = <INPUT_FORM
            arr = {let_input_str}
            func_activate={func_activate}
            is_undo={is_undo}
        />
    }
    return <>
        <STR_TO_H opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
