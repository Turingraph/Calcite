import {useEffect, useState, useRef} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import INPUT_STR from "./input_str";
import {STR_TO_H, str_to_default_num} from "../../utility/convert";
import * as uarr from "../../utility/utility_arr";
import "./index.css"

export type input_form_t = {
    opt_name?:a.opt_name|undefined
    arr:a.use_state_uit<string|number>[]
    func_activate?:a.func_event
    is_undo?:boolean
}

export default function INPUT_FORM({
    opt_name = undefined,
    arr,
    func_activate = (()=>undefined) as a.func_event,
    is_undo = false
}:input_form_t){
    const ref_DEFAULT_ARR = useRef(arr.map((item)=>{
        if(typeof item.ss === "number"){
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
    }, [ss_update, arr])
    function func_set_default(){
        arr.forEach((item, index)=>{item.setss(ref_DEFAULT_ARR.current[index])})
        setss_texts(ref_DEFAULT_ARR.current as string[])
    }
    function func_set_ok(){
        // https://www.geeksforgeeks.org/
        // how-to-resolve-usestate-set-method-is-not-reflecting-change-immediately/
        arr.forEach((item, index)=>{
            if(typeof ref_DEFAULT_ARR.current[index] === "number" && typeof item.ss === "number"){
                const CONST_INPUT = str_to_default_num(
                    ref_DEFAULT_ARR.current[index] as number,
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
        <STR_TO_H opt_name={item.opt_name}/>
        <INPUT_STR
            opt_name={undefined}
            input={{ 
                ss: ss_texts, 
                setss: ((e:string) => {
                    uarr.update_item(
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
        <STR_TO_H opt_name={opt_name}/>
        {JSX_ELEMENTS}
        <BUTTON_CLICK
            name={"apply change" as a.name}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        {is_undo ? <BUTTON_CLICK
            name={"cancel change" as a.name}
            func_event={(()=>{func_set_cancel()}) as a.func_event}
        /> : <></>}
        <BUTTON_CLICK
            name={"reset all" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}