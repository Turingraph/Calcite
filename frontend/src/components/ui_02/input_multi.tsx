import React from "react";
import * as a from "../../type/alias";
import { input_opt_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Input_str from "../ui_00/input_str";
import Input_num from "../ui_01/input_num";
import Input_opt from "../ui_01/input_opt";
import {Opt_to_jsx, Opt_to_jsx_arr} from "../../utils/opt_to_jsx";
import Input_form, {input_form_str} from "../ui_01/input_form"

export default function Input_multi({
    opt_name,
    input_str,
    input_opt
}:{
    opt_name:a.opt_name
    input_str:undefined|input_form_str[]
    input_opt:undefined|input_opt_t[]
}){
    let jsx_input_opt = Opt_to_jsx_arr({arr:input_opt, jsx_element:Input_opt})
    let jsx_input_str = <></>
    let let_input_str:input_form_str[] = []
    if (input_str !== undefined){
        let_input_str = input_str.map((item)=>{
            return {
                opt_name:item.opt_name,
                real_input:item.real_input,
                show_input:item.show_input,
                default_input:item.default_input
            }
        })
        jsx_input_str = <Input_form
            arr = {let_input_str}
        />
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
