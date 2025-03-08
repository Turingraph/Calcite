import {useState, useRef, useLayoutEffect, useReducer} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import OPT_INPUT from "./opt_input";
import {str_to_optmode_arr, STR_TO_H, item_to_index} from "../../utility/convert";
import { exclude_arr } from "../../use_reducer/utility_arr";
import PANEL from "../asset/panel";
import { opt_mode_uit } from "./type";
import { index_to_optmode } from "../../utility/convert";
import "./index.css"
import { act_namearr } from "../../use_reducer/act_objarr";
import * as uarr from "../../use_reducer/utility_arr"
import * as oarr from "../../use_reducer/func_objarr"
import { use_arr_t } from "../../use_reducer/act_arr";

export function func_create_opt(available_opts:opt_mode_uit[], length:number){
    available_opts = oarr.sort_arr(available_opts, {attr:"index", mode:"SORT"})
    if (available_opts.length > length){
        return available_opts[length].index
    }
    return undefined
}

function func_exclude_opt(available_opts:string[], exist_opts:number[]){
    // https://stackoverflow.com/questions/36829184/
    // how-can-i-convert-a-set-to-an-array-in-typescript
    available_opts = uarr.sort_arr(available_opts, "SORT")
    exist_opts = uarr.sort_arr(exist_opts, "SORT")
    // available_opts  = method_unique_arr(available_opts)
    // exist_opts      = method_unique_arr(exist_opts)
    const C_AVAILABLE_OPTS = oarr.sort_arr(
        str_to_optmode_arr(available_opts), 
        {attr:"index", mode:"SORT"}
    )
    const C_EXIST_OPTS = oarr.sort_arr(
        exist_opts.map((item)=>{
            return {
                name:available_opts[item] as a.name,
                index:item
            } as opt_mode_uit
        }),
        {attr:"index", mode:"SORT"}
    )
    return exclude_arr(C_AVAILABLE_OPTS, C_EXIST_OPTS) as opt_mode_uit[]
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
        act_namearr,
        func_exclude_opt(available_opts, exist_opts.ss)
    )
    const [ss_create_opt, setss_create_opt] = useState<number|undefined>(
        func_create_opt(ss_available_opts, 0)
    )
    const ref_DEFAULT_OPT = useRef<number>(exist_opts.ss[0])

    // Update ss_available_opts everytime when update exist_opts.ss
    // Sort exist_opts.ss
    useLayoutEffect(()=>{
        setss_available_opts({
            type:"SET",
            input:func_exclude_opt(available_opts, exist_opts.ss)
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
        const INPUT = index_to_optmode(
            ss_create_opt,
            ss_available_opts,
        )
        if(INPUT === undefined){
            return null
        }
        exist_opts.setss({
            type:"PUSH",
            input:INPUT.index
        })
        const NEXT_INDEX = item_to_index(ss_available_opts, INPUT)
        if(NEXT_INDEX !== undefined){
            return null
        }
        if(ss_available_opts.length <= 1){
            setss_create_opt(undefined)
        }
        else if(NEXT_INDEX === ss_available_opts.length - 1){
            setss_create_opt(func_create_opt(ss_available_opts, 0))
        }
        else if (NEXT_INDEX !== undefined){
            setss_create_opt(func_create_opt(ss_available_opts, NEXT_INDEX+1))
        }
    }
    function func_delete_eopts(index:number){
        if(ss_create_opt === undefined){
            setss_create_opt(exist_opts.ss[index])
        }
        exist_opts.setss({
            type:"DELETE",
            index:index
        })
    }
    const JSX_EXIST_OPTS = exist_opts.ss.map((item,index)=>{
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
            available_opts={ss_available_opts} 
            ss_mode={{ss:ss_create_opt, setss:setss_create_opt}}
            is_search_bar={is_search_bar}
            auto_update_opts={true}
        />
        <BUTTON_CLICK 
            name={(
                index_to_optmode(
                    ss_create_opt,
                    ss_available_opts,
                ) ? "Create "+(index_to_optmode(
                    ss_create_opt,
                    ss_available_opts,
                ))?.name
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