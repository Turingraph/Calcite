import React, {JSX, useState} from "react";
import * as a from "../../type/alias";
import { func_update_item } from "../../utils/crud_arr";
import Click_button from "../button/click_button";

export type select_button_t<
    t extends object,
    k extends keyof t> = {
        name?:a.name
        arr:a.use_state_t<t[]>,
        index:number,
        key:k
}

export default function Select_button<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    index,
    key
}:select_button_t<t,k>){
    function func_select(index:number){
        let update_input = arr.ss[index]
        if (update_input[key] === true){
            update_input[key] = false as t[k]
        }
        else{
            update_input[key] = true as t[k]
        }
        func_update_item(index, arr, update_input)
    }
    return <>
    <Click_button 
        name={name as a.name} 
        func_event={(()=>{func_select(index)}) as a.func_event}
    />
    </>
}