import React from "react";
import * as a from "../../type/alias";
import { input_multi_t, input_num_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Input_str from "../ui_00/input_str";
import Input_num from "../ui_01/input_num";
import Input_option from "../ui_01/input_option";

export default function Input_multi({
    opt_name    ,
    input_num   ,
    input_str   ,
    input_option
}:input_multi_t){
    let jsx_input_num = [<></>]
    let jsx_input_str = [<></>]
    let jsx_input_option = [<></>]
    if (input_num != undefined){
        jsx_input_num = input_num.map((item)=>{
            return <Input_num
                opt_name={item.opt_name}
                input={item.input}
                default_input={item.default_input}
            />
        })
    }
    if (input_str != undefined){
        jsx_input_str = input_str.map((item)=>{
            return <Input_str
                opt_name={item.opt_name}
                input={item.input}
            />
        })
    }
    if (input_option != undefined){
        jsx_input_option = input_option.map((item)=>{
            return <Input_option
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
        {jsx_input_option}
    </>
}
