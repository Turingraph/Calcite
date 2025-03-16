import React, { JSX, useEffect, useState } from "react";
import { use_arrname_t } from "../../array/act_arrobj";
import { STR_TO_H } from "../../convert/str";
import * as a from "../../type/alias";
import BUTTON_CLICK from "../button/button_click";
import INPUT_STR from "../input/input_str";
import "./index.css";

export default function OBJ_SELF<
    t extends {name:a.name}[]>({
    input_arr,
    this_item,
    ss_select,
    jsx_additional = undefined, 
}:{
    input_arr:use_arrname_t<t, keyof t[number]>
    this_item:number
    ss_select:a.use_state_t<number|undefined>
    jsx_additional?:JSX.Element|undefined
}){
    const [ss_ui_mode, setss_ui_mode] = useState<"NORMAL"|"RENAME"|"DELETE">("NORMAL")
    const [ss_name, setss_name] = useState<string>(input_arr.ss.ss[this_item].name as string)
    useEffect(()=>{
        if(ss_select.ss !== this_item && ss_ui_mode !== "NORMAL"){
            setss_ui_mode("NORMAL")
        }
    },[ss_select.ss, this_item, ss_ui_mode])
    useEffect(()=>{
        setss_name(input_arr.ss.ss[this_item].name as string)
    },[input_arr.ss, this_item])
    function func_reset(){
        ss_select.setss(undefined)
        setss_ui_mode("NORMAL")
    }
    function func_select(ui_mode:"RENAME"|"DELETE"){
        ss_select.setss(this_item)
        setss_ui_mode(ui_mode)
    }
    function func_rename(){
        input_arr.setss({
            type:"EDIT_ATTR",
            index:this_item as number,
            attr:"name" as keyof t[number],
            input:ss_name as t[number]["name"]
        })
        func_reset()
    }
    function func_delete(){
        input_arr.setss({
            type:"DELETE",
            index:this_item as number
        })
        func_reset()
    }
    function func_copy(){
        input_arr.setss({
            type:"COPY",
            index:this_item as number
        })
        func_reset()
    }
    if (ss_ui_mode === "NORMAL"){
        return <>
            <STR_TO_H opt_name={input_arr.ss.ss[this_item].name as a.opt_name}/>
            <BUTTON_CLICK
                name={"rename" as a.name}
                func_event={(()=>{func_select("RENAME")}) as a.func_event}
            />
            <BUTTON_CLICK
                name={"copy" as a.name}
                func_event={(()=>{func_copy()}) as a.func_event}
            />
            <BUTTON_CLICK
                name={"x" as a.name}
                func_event={(()=>{func_select("DELETE")}) as a.func_event}
            />
        {jsx_additional}
        </>
    }
    else if (ss_ui_mode === "RENAME" && ss_select.ss === this_item){
        return <>
        <STR_TO_H opt_name={"rename " + ss_name + " as ?" as a.name}/>
        <INPUT_STR
            opt_name={"RENAME" as a.opt_name}
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
    else if (ss_ui_mode === "DELETE" && ss_select.ss === this_item){
        // https://stackoverflow.com/questions/15292278/
        // how-do-i-remove-an-array-item-in-typescript
        return <>
            <STR_TO_H opt_name={"Do you want to delete \"" + input_arr.ss.ss[this_item].name + "\"" as a.opt_name}/>
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