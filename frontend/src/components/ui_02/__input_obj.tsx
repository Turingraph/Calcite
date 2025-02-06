import React from "react";
import * as a from "../../type/alias";
import { input_multi_t, input_num_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Input_str from "../ui_00/input_str";
import Input_num from "../ui_01/input_num";

export default function Input_obj({
    opt_name    ,
    input_num   ,
    input_str   ,
    option_name ,
    input_option
}:input_multi_t){
    let jsx_input_num = [<></>]
    let jsx_input_str = [<></>]
    let jsx_input_option = [<></>]
    if (input_num != undefined){
        jsx_input_num = input_num.map((item, index)=>{
            return <Input_num
                opt_name={item.opt_name}

            />
        })
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        <Str_to_h opt_name={option_name as a.opt_name}/>
    </>
}
