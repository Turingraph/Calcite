import React from "react";
import * as a from "../../type/alias";
import { input_opt_t, input_t, input_multi_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Input_str from "../ui_00/input_str";
import Input_num from "../ui_01/input_num";
import Input_opt from "../ui_01/input_opt";
import {Opt_to_jsx_arr} from "../../utils/opt_to_jsx";
import Input_form from "../ui_01/input_form"

export default function Input_multi({
    opt_name,
    input_str,
    input_opt
}:input_multi_t){
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
        />
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        {jsx_input_opt}
        {jsx_input_str}
    </>
}
