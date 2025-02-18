import React, {JSX, useState, useEffect} from "react";
import * as a from "../../type/alias";
import Button_click, {button_click_t} from "../button/button_click";
import Input_str from "../input/input_str";
import { Str_to_h } from "../../utils/convert";
import { method_delete_item, 
    method_update_item, 
    method_copy_item,
    method_update_item_attr } from '../../utils/arr_method'
import { Opt_to_jsx_arr } from "../../utils/convert";

export default function Obj_self<t extends {name:a.name}>({
    arr,
    index,
    jsx_additional = undefined, 
}:{
    arr:a.use_state_t<t[]>
    index:number
    jsx_additional?:JSX.Element|undefined
}){
    const [ss_ui_mode, setss_ui_mode] = useState<"normal"|"rename"|"delete">("normal")
    const [ss_name, setss_name] = useState<string>(arr.ss[index].name as string)
    useEffect(()=>{
        setss_ui_mode("normal")
    },[arr.ss])
    if (ss_ui_mode === "normal"){
        const INTERFACE_BUTTON:button_click_t[]= [
            {
                name:"rename" as a.name,
                func_event:(()=>{setss_ui_mode("rename")}) as a.func_event
            },
            {
                name:"copy" as a.name,
                func_event:(()=>{method_copy_item(index,arr)}) as a.func_event
            },
            {
                name:"x" as a.name,
                func_event:(()=>{setss_ui_mode("delete")}) as a.func_event
            }
        ]
        const JSX_BUTTONS = Opt_to_jsx_arr({arr:INTERFACE_BUTTON, jsx_element:Button_click})
        return <>
        {JSX_BUTTONS}
        {jsx_additional}
        </>
    }
    if (ss_ui_mode === "rename"){
        const INTERFACE_BUTTON:button_click_t[] = [
            {
                name:"yes" as a.name,
                func_event:(()=>{
                    method_update_item_attr(
                        index,
                        arr,
                        'name',
                        ss_name as t['name']
                    )
                }) as a.func_event
            },
            {
                name:"no" as a.name,
                func_event:(()=>{setss_ui_mode("normal")}) as a.func_event
            }
        ]
        const JSX_BUTTONS = Opt_to_jsx_arr({arr:INTERFACE_BUTTON, jsx_element:Button_click})
        return <>
        <Str_to_h opt_name={"rename " + arr.ss[index].name + " as ?" as a.name}/>
        <Input_str
            opt_name={"rename" as a.opt_name}
            input={{ss:ss_name, setss:setss_name}}
        />
        {JSX_BUTTONS}
        </>
    }
    if (ss_ui_mode === "delete"){
        // https://stackoverflow.com/questions/15292278/
        // how-do-i-remove-an-array-item-in-typescript
        const INTERFACE_BUTTON:button_click_t[] = [
            {
                name:"yes" as a.name,
                func_event:(()=>{method_delete_item(index, arr)}) as a.func_event
            },
            {
                name:"no" as a.name,
                func_event:(()=>{setss_ui_mode("normal")}) as a.func_event
            }
        ]
        const JSX_BUTTONS = Opt_to_jsx_arr({arr:INTERFACE_BUTTON, jsx_element:Button_click})
        return <>
            <Str_to_h opt_name={"Do you want to delete \"" + arr.ss[index].name + "\"" as a.opt_name}/>
            {JSX_BUTTONS}
        </>
    }
}