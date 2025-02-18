import React from "react";
import * as a from "../../type/alias";
import { method_update_item } from "../../utils/arr_method";
import Button_click from "../button/button_click";

export type obj_bool_uit<
    t extends object,
    k extends keyof t> = {
        name?:a.name
        arr:a.use_state_t<t[]>,
        index:number,
        attr:k,
        ui_mode?:"button"|"checkbox"
}

export default function Obj_bool<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    index,
    attr,
    ui_mode = "button"
}:obj_bool_uit<t,k>){
    function func_select(index:number){
        const UPDATE_INPUT = arr.ss[index]
        if (UPDATE_INPUT[attr] === true){
            UPDATE_INPUT[attr] = false as t[k]
        }
        else{
            UPDATE_INPUT[attr] = true as t[k]
        }
        method_update_item(index, arr, UPDATE_INPUT)
    }
    let jsx_element = <>
    <Button_click 
        name={name as a.name} 
        func_event={(()=>{func_select(index)}) as a.func_event}
    />
    </>
    if(ui_mode === "checkbox"){
        jsx_element = <>
        <input 
            type="checkbox" 
            onClick={(()=>{func_select(index)})}
            checked={arr.ss[index][attr] as unknown as boolean}
        />
        <label>{name}</label>
        </>
    }
    return <>{jsx_element}</>
}