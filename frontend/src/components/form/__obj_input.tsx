import React from "react";
import * as a from "../../type/alias";
import { input_multi_t, input_num_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Str_input from "../ui_00/str_input";

export default function Obj_input({
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
            return <></>
        })
    }
    return <>
        <Str_to_h opt_name={opt_name as a.opt_name}/>
        <Str_to_h opt_name={option_name as a.opt_name}/>
    </>
}
