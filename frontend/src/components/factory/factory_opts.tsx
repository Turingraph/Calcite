import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_opt from "../search/input_opt";
import {Str_to_h} from "../../utils/convert";
import { func_push_arr, func_delete_arr } from '../../utils/crud_arr'
import Panel from "../asset/panel";

export default function Factory_opts(
    {
        opt_name = undefined as a.opt_name,
        exist_objs,
        available_opts,
        default_opt = 0,
        is_search_bar = false,
        is_duplicate = false,
        shape = {
            x_scroll_bar: false,
            y_scroll_bar: false,
            w:undefined,
            h:undefined
        }
    }:{
        opt_name?:a.opt_name
        exist_objs:a.use_state_t<number[]>,
        available_opts:string[]
        default_opt?:number
        is_search_bar?:boolean
        is_duplicate?:boolean
        shape?:{x_scroll_bar?:boolean,
            y_scroll_bar?:boolean,
            w?:undefined|number,
            h?:undefined|number,
        }        
    }
){
    const [ss_create_mode, setss_create_mode] = useState<number>(default_opt)
    useEffect(()=>{
        if (is_duplicate === false){
            // https://stackoverflow.com/questions/36829184/
            // how-can-i-convert-a-set-to-an-array-in-typescript
            let update_exist_objs = new Set(exist_objs.ss);
            exist_objs.setss(Array.from(update_exist_objs))
        }
    },[exist_objs.ss])
    function func_reset(){
        exist_objs.setss([default_opt])
        setss_create_mode(default_opt)
    }
    let jsx_arr = exist_objs.ss.map((item,index)=>{
        return <>
            <Str_to_h opt_name={available_opts[item] as a.opt_name}/>
            <Click_button name={"x" as a.name} func_event={(()=>{
                func_delete_arr(index, exist_objs)
            }) as a.func_event}/>
        </>
    })
    return <>
        <Str_to_h opt_name={opt_name}/>
        <Input_opt 
            opt_name={"Select Mode" as a.opt_name} 
            available_opts={available_opts} 
            ss_mode={{ss:ss_create_mode, setss:setss_create_mode} as a.use_state_t<number>}
            is_search_bar={is_search_bar}
        />
        <Click_button 
            name={("Create "+available_opts[ss_create_mode]) as a.name}
            func_event={(()=>{func_push_arr(ss_create_mode,exist_objs)}) as a.func_event}
        />
        <Click_button 
            name={("Reset") as a.name}
            func_event={(()=>{func_reset()}) as a.func_event}
        />
        <Panel
            jsx_element={<>{jsx_arr}</>}
            x_scroll_bar={shape.x_scroll_bar}
            y_scroll_bar={shape.y_scroll_bar}
            w={shape.w}
            h={shape.h}
        />
    </>
}