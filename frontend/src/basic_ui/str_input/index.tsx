import React, { JSX, useState } from "react";
import str_input_type from "./type";

export default function Str_input(
{
    update_value,
    update_func,
}:str_input_type
){
    return (<>
<input onChange={()=>{update_func}} value={String(update_value)}></input>
</>);
}