import {JSX, useState, useEffect} from "react";
import * as a from "../../type/alias";
import BUTTON_CLICK from "../button/button_click";
import INPUT_STR from "../input/input_str";
import { STR_TO_H } from "../../utility/convert";
import * as uarr from '../../utility/utility_arr'
import "./index.css"

export default function OBJ_SELF<t extends {name:a.name}>({
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
    },[ss_select.ss, this_item, ss_ui_mode])
    useEffect(()=>{
        setss_name(arr.ss[this_item].name as string)
    },[arr.ss, this_item])
    function func_reset(){
        ss_select.setss(undefined)
        setss_ui_mode("normal")
    }
    function func_select(ui_mode:"rename"|"delete"){
        ss_select.setss(this_item)
        setss_ui_mode(ui_mode)
    }
    function func_rename(){
        uarr.update_item_attr(
            this_item,
            arr,
            'name',
            ss_name as t['name']
        )
        func_reset()
    }
    function func_delete(){
        uarr.delete_item(this_item, arr)
        func_reset()
    }
    if (ss_ui_mode === "normal"){
        return <>
            <BUTTON_CLICK
                name={"rename" as a.name}
                func_event={(()=>{func_select("rename")}) as a.func_event}
            />
            <BUTTON_CLICK
                name={"copy" as a.name}
                func_event={(()=>{uarr.copy_unique_item(this_item,arr)}) as a.func_event}
            />
            <BUTTON_CLICK
                name={"x" as a.name}
                func_event={(()=>{func_select("delete")}) as a.func_event}
            />
        {jsx_additional}
        </>
    }
    else if (ss_ui_mode === "rename" && ss_select.ss === this_item){
        return <>
        <STR_TO_H opt_name={"rename " + ss_name + " as ?" as a.name}/>
        <INPUT_STR
            opt_name={"rename" as a.opt_name}
            input={{ss:ss_name, setss:setss_name}}
        />
            <BUTTON_CLICK
                name={"yes" as a.name}
                func_event={(()=>{func_rename()}) as a.func_event}
            />
            <BUTTON_CLICK
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
            <STR_TO_H opt_name={"Do you want to delete \"" + arr.ss[this_item].name + "\"" as a.opt_name}/>
            <BUTTON_CLICK
                name={"yes" as a.name}
                func_event={(()=>{func_delete()}) as a.func_event}
            />
            <BUTTON_CLICK
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