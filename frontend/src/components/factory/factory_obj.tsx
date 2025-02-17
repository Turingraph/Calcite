import React, {JSX, useState, useEffect} from "react";
import * as a from "../../type/alias";
import Click_button from "../button/click_button";
import Input_str from "../input/input_str";
import { Str_to_h } from "../../utils/convert";
import { method_delete_item, 
    method_update_item, 
    method_copy_item,
    method_update_item_attr } from '../../utils/arr_method'

export default function Factory_obj<t extends {name:a.name}>({
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
        return <>
        <Str_to_h opt_name={arr.ss[index].name}/>
        <Click_button
            name={"rename" as a.name}
            func_event={(()=>{setss_ui_mode("rename")}) as a.func_event}
        />
        <Click_button
            name={"copy" as a.name}
            func_event={(()=>{method_copy_item(index,arr)}) as a.func_event}
        />
        {jsx_additional ? jsx_additional : <></>}
        <Click_button
            name={"x" as a.name}
            func_event={(()=>{setss_ui_mode("delete")}) as a.func_event}
        />
        </>
    }
    if (ss_ui_mode === "rename"){
        return <>
        <Str_to_h opt_name={"rename " + arr.ss[index].name + " as ?" as a.name}/>
        <Input_str
            opt_name={"rename" as a.opt_name}
            input={{ss:ss_name, setss:setss_name}}
        />
        <Click_button name={"yes" as a.name} func_event={(()=>{
            method_update_item_attr(
                index,
                arr,
                'name',
                ss_name as t['name']
            )
        }) as a.func_event}/>
        <Click_button name={"no" as a.name}  func_event={(()=>{setss_ui_mode("normal")}) as a.func_event}/>
        </>
    }
    if (ss_ui_mode === "delete"){
        // https://stackoverflow.com/questions/15292278/
        // how-do-i-remove-an-array-item-in-typescript
        return <>
            <Str_to_h opt_name={"Do you want to delete \"" + arr.ss[index].name + "\"" as a.opt_name}/>
            <Click_button name={"yes" as a.name} func_event={(()=>{method_delete_item(index, arr)}) as a.func_event}/>
            <Click_button name={"no" as a.name}  func_event={(()=>{setss_ui_mode("normal")}) as a.func_event}/>
        </>
    }
}