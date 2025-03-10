import {useState} from "react";
import * as a from '../../src/type/alias'
import BUTTON_CLICK from "../../src/components/button/button_click";
import BUTTON_TABS from "../../src/components/button/button_tabs";
import { OPT_NAME } from "../data";
import BUTTON_HISTORY from "../../src/components/button/button_history";
import { history_t } from "../../src/type/utility";

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
        return <h1>No.{index}: {item}</h1>
    })
    return <BUTTON_TABS 
    jsx_elements={JSX_ARR} 
    name_arr={OPT_NAME as a.name[]}/>
}
