import React from "react";
import * as a from "../../type/alias";
import { func_update_item } from "../../utils/crud_arr";
// import { select_button_t } from "./select_button";

export type select_button_t<
    t extends object,
    k extends keyof t> = {
        name?:a.name
        arr:a.use_state_t<t[]>,
        index:number,
        attr:k
}

export default function Select_checkbox<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    index,
    attr
}:select_button_t<t,k>){
    function func_click(){
        const UPDATE_INPUT = arr.ss[index]
        if (UPDATE_INPUT[attr] === true){
            UPDATE_INPUT[attr] = false as t[k]
        }
        else{
            UPDATE_INPUT[attr] = true as t[k]
        }
        func_update_item(index, arr, UPDATE_INPUT)
    }
    const HANDLE_CLICK = () => func_click()
    // https://stackoverflow.com/questions/56356900/
    // way-to-determine-checkbox-checked-in-react-usestate
    return <>
    <input 
        type="checkbox" 
        onClick={HANDLE_CLICK}
        checked={arr.ss[index][attr] as unknown as boolean}
    />
    <label>{name}</label>
    </>
}