import React, { JSX, useState, useEffect } from "react";
import * as a from "../../type/alias"
import { input_option_t } from "../../type/input";
import Str_to_h from "../../utils/str_to_h";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

export default function Click_option<t extends input_option_t> (
{
    opt_name = undefined,
    options,
    ss_option
}:{
    opt_name?:a.opt_name
    options:t[]
    ss_option:a.use_state_t<number>
}){
    let jsx_option = options.map((i)=>{
        return (<option value={i.value}>{i.key}</option>)
    })
    return (<>
        <Str_to_h opt_name={opt_name}/>
        <select value={ss_option.ss} onChange={()=>ss_option.setss(ss_option.ss)}>
            {jsx_option}
        </select>
    </>);
}
