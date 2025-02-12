import React , {useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_str from "./input_str";
import {Str_to_h} from "../../utils/convert";
import { input_t } from "../../type/input";
import { func_update_item, func_handle_type } from "../../utils/handle";
import Set_button from "../button/set_button";

export default function Input_form({
    opt_name = undefined,
    arr,
    func_activate = (()=>undefined) as a.func_event,
    is_undo = false
}:{
    opt_name?:a.opt_name|undefined
    arr:input_t<string|number>[]
    func_activate?:a.func_event
    is_undo?:boolean
}){
    const [ss_texts, setss_texts] = useState<string[]>(arr.map((item)=>{return item.input.ss.toString()}))
    let ss_arr = arr.map((item)=>{return item.input})
    let default_arr = arr.map((item)=>{
    if (item.default_input != undefined){
        return item.default_input
    }
    return 0})
    function func_set_default(){
        arr.map((item, index)=>{
            item.input.setss(default_arr[index])
            func_update_item(
                index,
                {ss:ss_texts, setss:setss_texts},
                default_arr[index].toString())
        })
    }
    function func_set_ok(){
        arr.map((item, index)=>{
            const item_t = typeof item.default_input;
            let let_input = func_handle_type(
                item.default_input as typeof item_t,
                ss_texts[index]
            )
            item.input.setss(let_input)
            func_update_item(
                index, 
                {ss:ss_texts, setss:setss_texts},
                let_input.toString())
        })
        func_activate()
    }
    function func_set_cancel(){
        arr.map((item, index)=>{
            func_update_item(
                index, 
                {ss:ss_texts, setss:setss_texts},
                item.input.ss.toString())
        })
    }
    let jsx_elements = arr.map((item,index)=>{
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
        {jsx_elements}
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