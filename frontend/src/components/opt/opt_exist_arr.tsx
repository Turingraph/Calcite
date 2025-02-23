import {useEffect, useState, useRef, useLayoutEffect} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import OPT_INPUT from "./opt_input";
import {str_to_optmode, STR_TO_H, item_to_index} from "../../utils/convert";
import { method_exclude_arr, method_push_arr, method_delete_item, method_sort_arrattr, method_unique_arr} from '../../utils/arr_method'
import PANEL from "../asset/panel";
import { opt_mode_uit } from "./type";
import { handle_access_optmode } from "../../utils/utils";
import "./index.css"

function func_exclude_opt(available_opts:string[], exist_opts:number[]){
    // https://stackoverflow.com/questions/36829184/
    // how-can-i-convert-a-set-to-an-array-in-typescript
    available_opts  = method_unique_arr(available_opts)
    exist_opts      = method_unique_arr(exist_opts)
    const CONST_AVAILABLE_OPTS = method_sort_arrattr(str_to_optmode(available_opts), "index")
    const CONST_EXIST_OPTS = method_sort_arrattr(exist_opts.map((item)=>{
        return {
            name:available_opts[item] as a.name,
            index:item
        } as opt_mode_uit
    }),"index")
    return method_exclude_arr(CONST_AVAILABLE_OPTS, CONST_EXIST_OPTS) as opt_mode_uit[]
}

function func_default_newobj_index(available_opts:opt_mode_uit[], length:number){
    const ARR = [...available_opts]
    method_sort_arrattr(ARR, "index")
    if (ARR.length > length){
        return ARR[length].index
    }
    return undefined
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
        exist_opts:a.use_state_t<number[]>,
        available_opts:string[]
        is_search_bar?:boolean
        shape?:{x_scroll_bar?:boolean,
            y_scroll_bar?:boolean,
            w?:undefined|number,
            h?:undefined|number,
        },
    }
){
    const [ss_available_opts, setss_available_opts] = useState<opt_mode_uit[]>(
        func_exclude_opt(available_opts, exist_opts.ss)
    )
    const [ss_newobj_index, setss_newobj_index] = useState<number|undefined>(
        func_default_newobj_index(ss_available_opts, 0)
    )
    const ref_DEFAULT_OPT = useRef<number>(exist_opts.ss[0])
    useLayoutEffect(()=>{
        setss_available_opts(func_exclude_opt(available_opts, exist_opts.ss))
    },[exist_opts.ss, available_opts])
    useEffect(()=>{
        console.log("OPT_EXIST_ARR : ss_newobj_index", ss_newobj_index)
        // console.log("OPT_EXIST_ARR : ss_available_opts",ss_available_opts)
    },[ss_newobj_index])
    function func_reset(){
        exist_opts.setss([ref_DEFAULT_OPT.current])
        if(ref_DEFAULT_OPT.current === available_opts.length - 1){
            setss_newobj_index(0)
        }
        else{
            setss_newobj_index(ref_DEFAULT_OPT.current+1)
        }
    }
    function func_push_exist_opts(){
        if(ss_newobj_index !== undefined){
            const INPUT = handle_access_optmode(
                ss_newobj_index,
                ss_available_opts,
            )
            if(INPUT !== undefined){
                const NEXT_INDEX = item_to_index(ss_available_opts, INPUT)
                method_push_arr(INPUT.index, exist_opts)
                if(NEXT_INDEX !== undefined){
                    if(ss_available_opts.length <= 1){
                        setss_newobj_index(undefined)
                    }
                    else if(NEXT_INDEX === ss_available_opts.length - 1){
                        setss_newobj_index(func_default_newobj_index(ss_available_opts, 0))
                    }
                    else{
                        setss_newobj_index(func_default_newobj_index(ss_available_opts, NEXT_INDEX+1))
                    }
                }
            }
        }
    }
    function func_delete_exist_opts(index:number){
        if(ss_newobj_index === undefined){
            setss_newobj_index(exist_opts.ss[index])
        }
        method_delete_item(index, exist_opts)
    }
    const JSX_ARR = exist_opts.ss.map((item,index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={available_opts[item] as a.opt_name}/>
            <BUTTON_CLICK name={"delete" as a.name} func_event={(()=>{
                func_delete_exist_opts(index)
            }) as a.func_event}/>
        </div>
    })
    return <>
        <STR_TO_H opt_name={opt_name}/>
        <OPT_INPUT 
            opt_name={"Select Mode" as a.opt_name} 
            available_opts={ss_available_opts} 
            ss_mode={{ss:ss_newobj_index, setss:setss_newobj_index} as a.use_state_t<number>}
            is_search_bar={is_search_bar}
        />
        <BUTTON_CLICK 
            name={(
                handle_access_optmode(
                    ss_newobj_index,
                    ss_available_opts,
                ) ? "Create "+(handle_access_optmode(
                    ss_newobj_index,
                    ss_available_opts,
                ))?.name
                : "Unable to create new option"
            ) as a.name}
            func_event={(()=>{func_push_exist_opts()}) as a.func_event}
        />
        <BUTTON_CLICK 
            name={("Reset") as a.name}
            func_event={(()=>{func_reset()}) as a.func_event}
        />
        <PANEL
            jsx_element={<>{JSX_ARR}</>}
            x_scroll_bar={shape.x_scroll_bar}
            y_scroll_bar={shape.y_scroll_bar}
            w={shape.w}
            h={shape.h}
        />
    </>
}