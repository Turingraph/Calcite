import React, { useLayoutEffect, useReducer, useRef, useState } from "react";
import { use_arr_t } from "../../array/act_arr";
import { act_arrname, ss_arrname_t } from "../../array/act_arrobj";
import * as oarr from "../../array/func_arrobj";
import { exclude_arr } from "../../array/utility";
import { arr_to_opt, item_to_index } from "../../convert/arr";
import { avarr_to_nvarr, nvarr_to_avarr, value_to_varr } from "../../convert/attr";
import { STR_TO_H } from "../../convert/str";
import * as a from "../../type/alias";
import PANEL from "../asset/panel";
import BUTTON_CLICK from "../button/button_click";
import "./index.css";
import OPT_INPUT from "./opt_input";

export function func_create_opt(available_opts:a.name_value<number>[], length:number){
    available_opts = oarr.sort_arrobj(available_opts, "SORT", "value")
    if (available_opts.length > length){
        return available_opts[length].value
    }
    return undefined
}

function func_exclude_opt(available_opts:string[], exist_opts:number[]){
    // https://stackoverflow.com/questions/36829184/
    // how-can-i-convert-a-set-to-an-array-in-typescript
    available_opts = oarr.sort_arr(available_opts, "SORT")
    exist_opts = oarr.sort_arr(exist_opts, "SORT")
    // available_opts  = method_unique_arr(available_opts)
    // exist_opts      = method_unique_arr(exist_opts)
    const C_AVAILABLE_OPTS = avarr_to_nvarr(oarr.sort_arrobj(
        arr_to_opt(available_opts), 
        "SORT", "value"))
    const C_EXIST_OPTS = oarr.sort_arrobj(
        exist_opts.map((item)=>{
            return {
                name:available_opts[item] as a.name,
                value:item
            } as a.name_value<number>
        }),
        "SORT", "value")
    return exclude_arr(C_AVAILABLE_OPTS, C_EXIST_OPTS) as a.name_value<number>[]
}

export default function OPT_EXIST_ARR(
    {
        opt_name = undefined as a.opt_name,
        exist_opts,
        available_opts,
        is_search_bar = false,
        shape = {
            x_scroll_bar: false,
            y_scroll_bar: false,
            w:undefined,
            h:undefined
        }
    }:{
        opt_name?:a.opt_name
        exist_opts:use_arr_t<number>,
        available_opts:string[]
        is_search_bar?:boolean
        shape?:{x_scroll_bar?:boolean,
            y_scroll_bar?:boolean,
            w?:undefined|number,
            h?:undefined|number,
        },
    }
){
    const [ss_available_opts, setss_available_opts] = useReducer(
        act_arrname,
        {
            sort_attr:"name",
            sort_mode:"SORT",
            ss:func_exclude_opt(available_opts, exist_opts.ss.ss)
        } as ss_arrname_t<a.name_value<number>[], keyof a.name_value<number>>
    )
    const [ss_create_opt, setss_create_opt] = useState<number|undefined>(
        func_create_opt(ss_available_opts.ss, 0)
    )
    const ref_DEFAULT_OPT = useRef<number>(exist_opts.ss.ss[0])

    // Update ss_available_opts everytime when update exist_opts.ss
    // Sort exist_opts.ss
    useLayoutEffect(()=>{
        setss_available_opts({
            type:"SET",
            input:func_exclude_opt(available_opts, exist_opts.ss.ss)
        })
    },[exist_opts, available_opts])

    function func_reset(){
        exist_opts.setss({
            type:"SET",
            input:[ref_DEFAULT_OPT.current]
        })
        if(ref_DEFAULT_OPT.current === available_opts.length - 1){
            setss_create_opt(0)
        }
        else{
            setss_create_opt(ref_DEFAULT_OPT.current+1)
        }
    }
    function func_push_eopts(){
        if(ss_create_opt === undefined){
            return null
        }
        const INPUT = value_to_varr(
            ss_create_opt,
            ss_available_opts.ss,
        )
        if(INPUT === undefined){
            return null
        }
        exist_opts.setss({
            type:"PUSH",
            input:INPUT.value
        })
        const NEXT_INDEX = item_to_index(ss_available_opts.ss, INPUT)
        if(NEXT_INDEX !== undefined){
            return null
        }
        if(ss_available_opts.ss.length <= 1){
            setss_create_opt(undefined)
        }
        else if(NEXT_INDEX === ss_available_opts.ss.length - 1){
            setss_create_opt(func_create_opt(ss_available_opts.ss, 0))
        }
        else if (NEXT_INDEX !== undefined){
            setss_create_opt(func_create_opt(ss_available_opts.ss, NEXT_INDEX+1))
        }
    }
    function func_delete_eopts(index:number){
        if(ss_create_opt === undefined){
            setss_create_opt(exist_opts.ss.ss[index])
        }
        exist_opts.setss({
            type:"DELETE",
            index:index
        })
    }
    const JSX_EXIST_OPTS = exist_opts.ss.ss.map((item,index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={available_opts[item] as a.opt_name}/>
            <BUTTON_CLICK name={"delete" as a.name} func_event={(()=>{
                func_delete_eopts(index)
            }) as a.func_event}/>
        </div>
    })
    return <>
        <STR_TO_H opt_name={opt_name}/>
        <OPT_INPUT 
            opt_name={"Select Mode" as a.opt_name} 
            available_opts={nvarr_to_avarr(ss_available_opts.ss)} 
            ss_mode={{ss:ss_create_opt, setss:setss_create_opt}}
            is_search_bar={is_search_bar}
            auto_update_opts={true}
        />
        <BUTTON_CLICK 
            name={(
                value_to_varr(
                    ss_create_opt,
                    ss_available_opts.ss,
                ) ? "Create "+((value_to_varr(
                    ss_create_opt,
                    ss_available_opts.ss,
                )) as a.name_value<number>)?.name
                : "Unable to create new option"
            ) as a.name}
            func_event={(()=>{func_push_eopts()}) as a.func_event}
        />
        <BUTTON_CLICK 
            name={("Reset") as a.name}
            func_event={(()=>{func_reset()}) as a.func_event}
        />
        <PANEL
            jsx_element={<>{JSX_EXIST_OPTS}</>}
            x_scroll_bar={shape.x_scroll_bar}
            y_scroll_bar={shape.y_scroll_bar}
            w={shape.w}
            h={shape.h}
        />
    </>
}