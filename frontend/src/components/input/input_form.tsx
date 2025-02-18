import React , {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Button_click from "../button/button_click";
import Input_str from "./input_str";
import {Str_to_h, Str_to_default_num} from "../../function/convert";
import { method_update_item } from "../../function/arr_method";

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
    const [ss_DEFAULT_ARR, setss_DEFAULT_ARR] = useState<(string|number)[]>(arr.map((item)=>{
        if(typeof item.ss == "number"){
            return item.ss as number
        }
        return item.ss.toString()
    }))
    const [ss_texts, setss_texts] = useState<string[]>(arr.map((item)=>{return item.ss.toString()}))
    const [ss_update, setss_update] = useState<0|1>(0)
    useEffect(()=>{
        const UPDATE_TEXT = arr.map((item)=>{
            return item.ss as string
        })
        setss_texts(UPDATE_TEXT)
        setss_update(0)
    }, [ss_update])
    function func_set_default(){
        arr.map((item, index)=>{item.setss(ss_DEFAULT_ARR[index])})
        setss_texts(ss_DEFAULT_ARR as string[])
    }
    function func_set_ok(){
        // https://www.geeksforgeeks.org/
        // how-to-resolve-usestate-set-method-is-not-reflecting-change-immediately/
        arr.map((item, index)=>{
            if(typeof ss_DEFAULT_ARR[index] === "number" && typeof item.ss === "number"){
                const CONST_INPUT = Str_to_default_num(
                    ss_DEFAULT_ARR[index],
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
        // https://stackoverflow.com/questions/28329382/
        // understanding-unique-keys-for-array-children-in-react-js
        return <div key={index}>
        <Str_to_h opt_name={item.opt_name}/>
        <Input_str
            opt_name={undefined}
            input={{ 
                ss: ss_texts, 
                setss: ((e:string) => {
                    method_update_item(
                        index, 
                        {ss:ss_texts, setss:setss_texts}, 
                        e);
                }),
            } as unknown as a.use_state_t<string>}
            index = {index}
        />
        </div>
    })
    return <>
        <Str_to_h opt_name={opt_name}/>
        {JSX_ELEMENTS}
        <Button_click
            name={"apply change" as a.name}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        {is_undo ? <Button_click
            name={"cancel change" as a.name}
            func_event={(()=>{func_set_cancel()}) as a.func_event}
        /> : <></>}
        <Button_click
            name={"reset all" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}