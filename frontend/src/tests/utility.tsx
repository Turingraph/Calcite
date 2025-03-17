import React, { useReducer } from "react";
import act_arr from "../ui/array/act_arr";
import BUTTON_CLICK from "../ui/components/button/button_click";
import * as a from "../ui/type/alias";
import { DUPLICATE_NAME } from "./data";


export function TEST_UNIQUE(){
    const [ss_name, setss_name] = useReducer(
        act_arr,
        {
            ss:DUPLICATE_NAME
        }
    )
    const JSX_ARR = ss_name.ss.map((item, index)=>{
        return <div key={index}><h1>{item}</h1></div>
    })
    return <>
    <BUTTON_CLICK 
        name={"Delete Duplicate Python Name" as a.opt_name}
        func_event={(()=>{setss_name({
            type:"UNIQUE"
        })}) as a.func_event}
    />
    {JSX_ARR}
    </>
}