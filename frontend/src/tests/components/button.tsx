import React, { useState } from "react";
import BUTTON_CLICK from "../../ui/components/button/button_click";
import BUTTON_HISTORY from "../../ui/components/button/button_history";
import BUTTON_TABS from "../../ui/components/button/button_tabs";
import * as a from '../../ui/type/alias';
import { history_t } from "../../ui/type/utility";
import { OPT_NAME } from "../data";

export function TEST_BUTTON_CLICK(){
    const func_event = () =>{
        alert("Dr Stone and Dr Taiju")
    }
    return <>
    <BUTTON_CLICK 
        name={"Dr Senku" as a.name} 
        func_event={func_event as a.func_event}
    />
    </>
}

export function TEST_BUTTON_HISTORY(){
    const [ss_history, setss_history] = useState<history_t<a.attr_value<number>>>(
        {
            arr:OPT_NAME.map((item,index)=>{
                return {attr:item as a.attr, value:1/(index+1)}
            }),
            commit:OPT_NAME,
            current:OPT_NAME.length - 1
        }
    )
    return <>
        <BUTTON_HISTORY 
        history={{ss:ss_history, setss:setss_history}}/>
        <h1>No   : {ss_history.current}</h1> 
        <h1>Name : {ss_history.arr[ss_history.current].attr}</h1> 
        <h1>Value: {ss_history.arr[ss_history.current].value}</h1> 
        </>
}

export function TEST_BUTTON_TABS(){
    const JSX_ARR = OPT_NAME.map((item,index)=>{
        return <div key={index}><h1>No.{index}: {item}</h1></div>
    })
    return <>
    <BUTTON_TABS 
    jsx_elements={JSX_ARR} 
    name_arr={OPT_NAME as a.name[]}/>
    </>
}
