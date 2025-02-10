import React from "react";
import * as a from "../../type/alias";
import {input_t, combine_input_t } from "../../type/input";
import {Str_to_h, Opt_to_jsx_arr} from "../../utils/convert";
import Input_opt from "../search/input_opt";
import Input_form from "./input_form";

export default function Combine_input({
    opt_name,
    input_str,
    input_opt,
    func_activate
}:combine_input_t){
    let jsx_input_opt = Opt_to_jsx_arr({arr:input_opt, jsx_element:Input_opt})
    let jsx_input_str = <></>
    let let_input_str:input_t<string|number>[] = []
    if (input_str !== undefined){
        let_input_str = input_str.map((item)=>{
            return {
                opt_name:item.opt_name,
                input:item.input,
                default_input:item.default_input
            }
        })
        jsx_input_str = <Input_form
            arr = {let_input_str}
            func_activate={func_activate}
        />
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
