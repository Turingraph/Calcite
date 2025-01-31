import React, { JSX, useState, useEffect } from "react";
import state_option_type from "./type";
import Str_to_h from "../../optional_input/str_to_h";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

export default function State_option(
{
    title = undefined,
    options,
    ss_option,
    setss_option
}:state_option_type
){
    let jsx_option = options.map((i)=>{
        return (<option value={i.value}>{i.key}</option>)
    })
    return (<>
        <Str_to_h title={title}/>
        <select value={ss_option} onChange={()=>setss_option(ss_option)}>
            {jsx_option}
        </select>
    </>);
}
