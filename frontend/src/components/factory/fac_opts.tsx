import React, {useEffect, useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_opt from "../search/input_opt";
import {Str_to_h} from "../../utils/convert";
import { func_push_arr, func_delete_item } from '../../utils/crud_arr'
import Panel from "../asset/panel";
import { input_opt_uit, opt_mode_uit } from "../search/type";
import { func_get_create_mode } from "../../utils/handle";

export default function Fac_opts(
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
        }        
    }
){
    const [ss_available_opts, setss_available_opts] = useState<opt_mode_uit[]>(
        (available_opts.map((item, index)=>{
            if(exist_opts.ss.includes(index) === false){
                return {
                    name:item as a.name,
                    index:index
                }
            }
        }) as opt_mode_uit[]).filter((item)=> item != undefined)
    )
    const [ss_create_mode, setss_create_mode] = useState<number>(0)

    useEffect(()=>{
        const UPDATE_AVAILABLE_OPTS = (available_opts.map((item, index)=>{
            if(exist_opts.ss.includes(index) == false){
                return {
                    name:item as a.name,
                    index:index
                }
            }
        }) as opt_mode_uit[]).filter((item)=> item != undefined)
        setss_available_opts(UPDATE_AVAILABLE_OPTS)
        setss_create_mode(0)
    },[exist_opts.ss])
}