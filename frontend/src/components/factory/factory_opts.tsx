import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_opt from "../search/input_opt";
import {Numarr_to_strarr, Str_to_h} from "../../utils/convert";
import { func_push_arr, func_delete_item, func_sort_arrattr } from '../../utils/crud_arr'
import Panel from "../asset/panel";
import { input_opt_uit, opt_mode_uit } from "../../type/input_ui";
import { Strarr_to_optmode } from "../../utils/convert";
import { func_exclude_arr, func_access_optmode } from "../../utils/handle";
import { Item_to_index } from "../../utils/convert";

export function func_exclude_opt(available_opts:string[], exist_opts:number[]){
    const CONST_AVAILABLE_OPTS = func_sort_arrattr(Strarr_to_optmode(available_opts), "index")
    const CONST_EXIST_OPTS = func_sort_arrattr(exist_opts.map((item)=>{
        return {
            name:available_opts[item] as a.name,
            index:item
        } as opt_mode_uit
    }),"index")
    return func_exclude_arr(CONST_AVAILABLE_OPTS, CONST_EXIST_OPTS) as opt_mode_uit[]
}

export function func_default_newobj_index(available_opts:opt_mode_uit[], length:number){
    const ARR = [...available_opts]
    func_sort_arrattr(ARR, "index")
    if (ARR.length > length){
        return ARR[length].index
    }
    return undefined
}

// export function func_update_opt_index(
//     max:number, index:number, func:((e:number)=>number)|undefined){
//     let y:number;
//     if(index === max){
//         y = 0
//     }
//     else{
//         y = index+1
//     }
//     if(func === undefined){
//         return y
//     }
//     else{
//         return func(y)
//     }
// }

export default function Factory_opts(
    {
        opt_name = undefined as a.opt_name,
        exist_opts,
        available_opts,
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
        }        
    }
){
    const [ss_available_opts, setss_available_opts] = useState<opt_mode_uit[]>(
        func_exclude_opt(available_opts, exist_opts.ss)
    )
    const [ss_newobj_index, setss_newobj_index] = useState<number|undefined>(
        func_default_newobj_index(ss_available_opts, 0)
    )
    useEffect(()=>{
        setss_available_opts(func_exclude_opt(available_opts, exist_opts.ss))
    },[exist_opts.ss])
    const DEFAULT_OPT = exist_opts.ss[0]
    function func_reset(){
        exist_opts.setss([DEFAULT_OPT])
        // setss_newobj_index(func_update_opt_index(available_opts.length - 1, DEFAULT_OPT, undefined))
        if(DEFAULT_OPT === available_opts.length - 1){
            setss_newobj_index(0)
        }
        else{
            setss_newobj_index(DEFAULT_OPT+1)
        }
    }

    function func_push_exist_opts(){
        if(ss_newobj_index !== undefined){
            const INPUT = func_access_optmode(
                ss_newobj_index,
                ss_available_opts,
            )
            if(INPUT !== undefined){
                const NEXT_INDEX = Item_to_index(ss_available_opts, INPUT)
                func_push_arr(INPUT.index, exist_opts)
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
        func_delete_item(index, exist_opts)
    }
    const JSX_ARR = exist_opts.ss.map((item,index)=>{
        return <>
            <Str_to_h opt_name={available_opts[item] as a.opt_name}/>
            <Click_button name={"delete" as a.name} func_event={(()=>{
                func_delete_exist_opts(index)
            }) as a.func_event}/>
        </>
    })
    return <>
        <Str_to_h opt_name={opt_name}/>
        <Input_opt 
            opt_name={"Select Mode" as a.opt_name} 
            available_opts={ss_available_opts} 
            ss_mode={{ss:ss_newobj_index, setss:setss_newobj_index} as a.use_state_t<number>}
            is_search_bar={false}
        />
        <Click_button 
            name={(
                func_access_optmode(
                    ss_newobj_index,
                    ss_available_opts,
                ) ? "Create "+(func_access_optmode(
                    ss_newobj_index,
                    ss_available_opts,
                ))?.name
                : "Unable to create new option"
            ) as a.name}
            func_event={(()=>{func_push_exist_opts()}) as a.func_event}
        />
        <Click_button 
            name={("Reset") as a.name}
            func_event={(()=>{func_reset()}) as a.func_event}
        />
        <Panel
            jsx_element={<>{JSX_ARR}</>}
            x_scroll_bar={shape.x_scroll_bar}
            y_scroll_bar={shape.y_scroll_bar}
            w={shape.w}
            h={shape.h}
        />
    </>
}