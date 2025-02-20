import {useState} from "react";
import * as a from '../../type/alias'
import BUTTON_CLICK from "../../components/button/button_click";
import BUTTON_TABS from "../../components/button/button_tabs";
import { OPT_NAME } from "../constant";
import BUTTON_HISTORY from "../../components/button/button_history";
import { opt_mode_uit } from "../../components/opt/type";

// const DATA_ARR:opt_mode_uit[] = OPT_NAME.map((item,index)=>{
//     return {name:item as a.name, index:1/(index+1)}
// })

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
    const [ss_history, setss_history] = useState<a.history<opt_mode_uit>>(
        {
            arr:OPT_NAME.map((item,index)=>{
                return {name:item as a.name, index:1/(index+1)}
            }),
            commit:OPT_NAME,
            current:OPT_NAME.length - 1
        }
    )
    return <>
        <BUTTON_HISTORY 
        history={{ss:ss_history, setss:setss_history}}/>
        <h1>No   : {ss_history.current}</h1> 
        <h1>Name : {ss_history.arr[ss_history.current].name}</h1> 
        <h1>Value: {ss_history.arr[ss_history.current].index}</h1> 
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