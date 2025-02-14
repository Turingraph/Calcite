import React , {useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_str from "./input_str";
import {Str_to_h} from "../../utils/convert";
import { input_uit } from "../../type/input_ui";
import { func_update_item } from "../../utils/crud_arr";
import { func_handle_type } from "../../utils/handle";

export default function Input_form({
    opt_name = undefined,
    arr,
    func_activate = (()=>undefined) as a.func_event,
    is_undo = false
}:{
    opt_name?:a.opt_name|undefined
    arr:input_uit<string|number>[]
    func_activate?:a.func_event
    is_undo?:boolean
}){
    const [ss_texts, setss_texts] = useState<string[]>(arr.map((item)=>{return item.input.ss.toString()}))
    const SS_ARR = arr.map((item)=>{return item.input})
    const DEFAULT_ARR = arr.map((item)=>{
    if (item.default_input != undefined){
        return item.default_input
    }
    return 0})
    function func_set_default(){
        SS_ARR.map((item, index)=>{item.setss(DEFAULT_ARR[index])})
        setss_texts(DEFAULT_ARR as string[])
    }
    function func_set_ok(){
        SS_ARR.map((item, index)=>{
            const ITEM_T = typeof DEFAULT_ARR[index];
            const CONST_INPUT = func_handle_type(
                DEFAULT_ARR[index] as typeof ITEM_T,
                ss_texts[index]
            )
            item.setss(CONST_INPUT)
        })
        const UPDATE_TEXT = SS_ARR.map((item)=>{
            return item.ss as string
        })
        setss_texts(UPDATE_TEXT)
        func_activate()
    }
    function func_set_cancel(){
        const UPDATE_TEXT = SS_ARR.map((item)=>{
            return item.ss as string
        })
        setss_texts(UPDATE_TEXT)
    }
    const JSX_ELEMENTS = arr.map((item,index)=>{
        return <>
        <Str_to_h opt_name={item.opt_name}/>
        <Input_str
            opt_name={undefined}
            input={{ 
                ss: ss_texts, 
                setss: ((e:string) => {
                    func_update_item(index, {ss:ss_texts, setss:setss_texts}, e);
                })} as unknown as a.use_state_t<string>}
        />
        </>
    })
    return <>
        <Str_to_h opt_name={opt_name}/>
        {JSX_ELEMENTS}
        <Click_button
            name={"apply change" as a.name}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        {is_undo ? <Click_button
            name={"cancel change" as a.name}
            func_event={(()=>{func_set_cancel()}) as a.func_event}
        /> : <></>}
        <Click_button
            name={"reset all" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}