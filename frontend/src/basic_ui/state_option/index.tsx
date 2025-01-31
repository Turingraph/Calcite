import React, { JSX, useState, useEffect } from "react";
import state_option_type from "./type";

/*
*   https://stackoverflow.com/questions/3518002/how-can-i-set-the-default-value-for-an-html-select-element
*/

export default function Str_input(
{
    title=null,
    options,
    ss_option,
    setss_option
}:state_option_type
){
    let jsx_title = <></>;
    if(title != null){
        jsx_title = <h1>{title}</h1>
    }
    let jsx_option = options.map((i)=>{
        return (<option value={i.value}>{i.key}</option>)
    })
    return (<>
        {jsx_title}
        <select value={ss_option} onChange={()=>setss_option(ss_option)}>
            {jsx_option}
        </select>
    </>);
}
