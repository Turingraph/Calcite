import React from "react"
import * as a from "../../type/alias";
import { input_option_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";
import Click_button from "../ui/click_button";

export default function Multi_options(
{
    opt_name,
    available_opts,
    exist_opts
}:{
    opt_name:a.opt_name,
    available_opts:input_option_t[],
    exist_opts:input_option_t[]
}
){
    const []
    
    return <>
    <Str_to_h opt_name={opt_name}/>
    <Click_button name={"add option" as a.name} event_func={(()=>{console.log()}) as a.event_func}/>
    <Click_button name={"reset" as a.name} event_func={(()=>{console.log()}) as a.event_func}/>
    </>
}