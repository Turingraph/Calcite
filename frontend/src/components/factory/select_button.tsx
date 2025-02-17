import React from "react";
import * as a from "../../type/alias";
import { method_update_item } from "../../utils/arr_method";
import Click_button from "../button/click_button";

export type select_button_t<
    t extends object,
    k extends keyof t> = {
        name?:a.name
        arr:a.use_state_t<t[]>,
        index:number,
        attr:k
}

export default function Select_button<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    index,
    attr
}:select_button_t<t,k>){
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
    return <>
    <Click_button 
        name={name as a.name} 
        func_event={(()=>{func_select(index)}) as a.func_event}
    />
    </>
}