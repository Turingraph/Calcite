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
        key:k
}

export default function Select_checkbox<
    t extends object,
    k extends keyof t>({
    name = "select" as a.name,
    arr,
    index,
    key
}:select_button_t<t,k>){
    function func_click(){
        let update_input = arr.ss[index]
        if (update_input[key] === true){
            update_input[key] = false as t[k]
        }
        else{
            update_input[key] = true as t[k]
        }
        func_update_item(index, arr, update_input)
    }
    const handle_click = () => func_click()
    // https://stackoverflow.com/questions/56356900/
    // way-to-determine-checkbox-checked-in-react-usestate
    return <>
    <input 
        type="checkbox" 
        onClick={handle_click}
        checked={arr.ss[index][key] as unknown as boolean}
    />
    <label>{name}</label>
    </>
}