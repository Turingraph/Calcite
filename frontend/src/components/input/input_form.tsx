import React , {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_str from "./input_str";
import {Str_to_h} from "../../utils/convert";
import { func_update_item } from "../../utils/crud_arr";
import { func_handle_num_type } from "../../utils/handle";

export type input_form_t = {
    opt_name?:a.opt_name|undefined
    arr:a.use_state_uit<string|number>[]
    func_activate?:a.func_event
    is_undo?:boolean
}

export default function Input_form({
    opt_name = undefined,
    arr,
    func_activate = (()=>undefined) as a.func_event,
    is_undo = false
}:input_form_t){
    const [ss_texts, setss_texts] = useState<string[]>(arr.map((item)=>{return item.ss.toString()}))
    const [ss_update, setss_update] = useState<0|1>(0)
    useEffect(()=>{
        const UPDATE_TEXT = arr.map((item)=>{
            return item.ss as string
        })
        setss_texts(UPDATE_TEXT)
        setss_update(0)
    }, [ss_update])
    const DEFAULT_ARR = arr.map((item)=>{return item.ss})
    function func_set_default(){
        arr.map((item, index)=>{item.setss(DEFAULT_ARR[index])})
        setss_texts(DEFAULT_ARR as string[])
    }
    function func_set_ok(){
        // https://www.geeksforgeeks.org/
        // how-to-resolve-usestate-set-method-is-not-reflecting-change-immediately/
        arr.map((item, index)=>{
            if(typeof DEFAULT_ARR[index] === "number" && typeof item.ss === "number"){
                const CONST_INPUT = func_handle_num_type(
                    DEFAULT_ARR[index],
                    ss_texts[index]
                )
                item.setss(CONST_INPUT)
            }
            else{
                item.setss(ss_texts[index])
            }
        })
        setss_update(1)
        func_activate()
    }
    function func_set_cancel(){
        const UPDATE_TEXT = arr.map((item)=>{
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
                    func_update_item(
                        index, 
                        {ss:ss_texts, setss:setss_texts}, 
                        e);
                }),
            } as unknown as a.use_state_t<string>}
            index = {index}
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