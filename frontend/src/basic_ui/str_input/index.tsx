import React, { JSX, useState, useEffect } from "react";
import str_input_type from "./type";

export default function Str_input(
{
    ss_input,
    setss_input
}:str_input_type
){
    return (<>
<input onChange={()=>{setss_input(ss_input)}} value={ss_input}></input>
</>);
}
