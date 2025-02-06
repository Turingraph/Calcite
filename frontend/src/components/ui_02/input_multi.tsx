import React from "react";
import * as a from "../../type/alias";
import { input_multi_t, input_num_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Input_str from "../ui_00/input_str";
import Input_num from "../ui_01/input_num";
import Input_opt from "../ui_01/input_opt";
import Opt_to_jsx from "../../utils/opt_to_jsx";

export default function Input_multi({
    opt_name    ,
    input_num   ,
    input_str   ,
    input_opt
}:input_multi_t){
    let jsx_input_str = Opt_to_jsx({arr:input_str, jsx_element:Input_str})
    let jsx_input_opt = Opt_to_jsx({arr:input_opt, jsx_element:Input_opt})
    let jsx_input_num = Opt_to_jsx({arr:input_num, jsx_element:Input_num})
    if (input_str != undefined){
        jsx_input_str = input_str.map((item)=>{
            return <Input_str
                opt_name={item.opt_name}
                input={item.input}
            />
        })
    }
    if (input_opt != undefined){
        jsx_input_opt = input_opt.map((item)=>{
            return <Input_opt
                opt_name={item.opt_name}
                available_opts={item.available_opts}
                ss_mode={item.ss_mode}
                is_search_bar={item.is_search_bar}
            />
        })
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        {jsx_input_num}
        {jsx_input_str}
        {jsx_input_opt}
    </>
}
