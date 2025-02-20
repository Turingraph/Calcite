import React, {JSX, useState, useEffect} from "react";
import * as a from "../../type/alias";
import Button_click, {button_click_t} from "../button/button_click";
import Input_str from "../input/input_str";
import { Str_to_h } from "../../utils/convert";
import { method_delete_item, 
    method_copy_item,
    method_update_item_attr } from '../../utils/arr_method'

export default function Obj_self<t extends {name:a.name}>({
    arr,
    this_item,
    ss_select,
    jsx_additional = undefined, 
}:{
    arr:a.use_state_t<t[]>
    this_item:number
    ss_select:a.use_state_t<number|undefined>
    jsx_additional?:JSX.Element|undefined
}){
    const [ss_ui_mode, setss_ui_mode] = useState<"normal"|"rename"|"delete">("normal")
    const [ss_name, setss_name] = useState<string>(arr.ss[this_item].name as string)
    useEffect(()=>{
        if(ss_select.ss !== this_item && ss_ui_mode !== "normal"){
            setss_ui_mode("normal")
        }
    })
    useEffect(()=>{
        setss_name(arr.ss[this_item].name as string)
        console.log(arr.ss)
    },[arr.ss])
    function func_reset(){
        ss_select.setss(undefined)
        setss_ui_mode("normal")
    }
    function func_select(ui_mode:"rename"|"delete"){
        ss_select.setss(this_item)
        setss_ui_mode(ui_mode)
    }
    function func_rename(){
        method_update_item_attr(
            this_item,
            arr,
            'name',
            ss_name as t['name']
        )
        func_reset()
    }
    function func_delete(){
        method_delete_item(this_item, arr)
        func_reset()
    }
    if (ss_ui_mode === "normal"){
        return <>
            <Button_click
                name={"rename" as a.name}
                func_event={(()=>{func_select("rename")}) as a.func_event}
            />
            <Button_click
                name={"copy" as a.name}
                func_event={(()=>{method_copy_item(this_item,arr)}) as a.func_event}
            />
            <Button_click
                name={"x" as a.name}
                func_event={(()=>{func_select("delete")}) as a.func_event}
            />
        {jsx_additional}
        </>
    }
    else if (ss_ui_mode === "rename" && ss_select.ss === this_item){
        return <>
        <Str_to_h opt_name={"rename " + ss_name + " as ?" as a.name}/>
        <Input_str
            opt_name={"rename" as a.opt_name}
            input={{ss:ss_name, setss:setss_name}}
        />
            <Button_click
                name={"yes" as a.name}
                func_event={(()=>{func_rename()}) as a.func_event}
            />
            <Button_click
                name={"no" as a.name}
                func_event={(()=>{func_reset()}) as a.func_event}
            />
        {jsx_additional}
        </>
    }
    else if (ss_ui_mode === "delete" && ss_select.ss === this_item){
        // https://stackoverflow.com/questions/15292278/
        // how-do-i-remove-an-array-item-in-typescript
        return <>
            <Str_to_h opt_name={"Do you want to delete \"" + arr.ss[this_item].name + "\"" as a.opt_name}/>
            <Button_click
                name={"yes" as a.name}
                func_event={(()=>{func_delete()}) as a.func_event}
            />
            <Button_click
                name={"no" as a.name}
                func_event={(()=>{func_reset()}) as a.func_event}
            />
            {jsx_additional}
        </>
    }
    else{
        return <>Error in frontend/components/obj/obj_self.tsx</>
    }
}