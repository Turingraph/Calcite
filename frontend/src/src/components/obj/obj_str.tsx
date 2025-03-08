import { useEffect, useRef, useReducer, useLayoutEffect } from "react"
import {use_objarr_t} from "../../array/act_objarr"
import INPUT_STR from "../input/input_str"
import { get_obj_value } from "../../array/utility"
import act_arr from "../../array/act_arr"
import * as a from "../../type/alias"
import { avarr_to_value, str_to_default_num, STR_TO_H } from "../../utility/convert"
import BUTTON_CLICK from "../button/button_click"

export default function OBJ_STR<
    t extends object[],
    k extends keyof t[number]>({
    input_arr,
    this_item,
    attrs,
    default_value = undefined,
    is_undo=false
}:{
    input_arr:use_objarr_t<t>,
    this_item:number,
    attrs:k[],
    default_value?:(undefined|a.attr_value<t[k]>[])
    is_undo?:boolean,
}){
    const ref_pigeon_hole = useRef(input_arr.ss.length)
    const [ss_defaults, setss_defaults] = useReducer(
        act_arr,
        (default_value 
            ? avarr_to_value(default_value) 
            : get_obj_value(input_arr.ss[this_item] as t[number], attrs)
        ) as t[number][k][]
    )
    const [ss_texts, setss_texts] = useReducer(
        act_arr,
        get_obj_value(input_arr.ss[this_item] as t[number], attrs) as string[]
    )

    // Update ss_texts = input_arr.ss
    useEffect(()=>{
        const UPDATE = get_obj_value(input_arr.ss[this_item] as t[number], attrs) as string[]
        setss_texts({
            type:"SET",
            input:UPDATE
        })
    }, [input_arr.ss, this_item])

    // Update ss_defaults (a.k.a. default value of input_arr.ss[this_index])
    // every time the input_arr.ss is puch or deleted.
    useLayoutEffect(()=>{
        if(ref_pigeon_hole.current !== input_arr.ss.length 
            && default_value === undefined){
            const UPDATE = get_obj_value(input_arr.ss[this_item] as t[number], attrs)
            setss_defaults({
                type:"SET",
                input:UPDATE
            })
            ref_pigeon_hole.current = input_arr.ss.length
        }
    },[ss_texts, this_item, input_arr.ss])

    const C_THIS_ITEM : t[number] = input_arr.ss[this_item]

    function func_update_item(new_input_arr:string[]){
        attrs.forEach((item:k, index)=>{
            let let_input:number|string = new_input_arr[index]
            if (typeof C_THIS_ITEM[item] === "number"){
                if (typeof ss_defaults[index] === "number"){
                    let_input = str_to_default_num(
                        ss_defaults[index],
                        let_input
                    ) as number
                }
                else{
                    let_input = str_to_default_num(
                        0,
                        let_input
                    ) as number
                }
            }
            if(typeof C_THIS_ITEM[item] === "number" || 
                typeof C_THIS_ITEM[item] === "string"){
                input_arr.setss({
                    type:"EDIT_ATTR",
                    index:this_item,
                    attr:item as keyof t[number],
                    input:let_input as t[number][keyof t[number]]
                })
            }
        })
    }
    function func_cancel(){
        const UPDATE = get_obj_value(input_arr.ss[this_item] as t[number], attrs) as string[]
        setss_texts({
            type:"SET",
            input:UPDATE
        })
    }
    const JAX_INPUTS = attrs.map((item, index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={item as a.opt_name}/>
            <INPUT_STR
                opt_name={item as a.opt_name}
                input={{
                    ss:ss_texts[index],
                    setss:((e:string)=>{
                        setss_texts({
                            type:"EDIT",
                            index:this_item,
                            input:e
                        })
                    })
                }}
            />
        </div>
    })
    return <>
        {JAX_INPUTS}
        <BUTTON_CLICK
            name={"apply change" as a.name}
            func_event={(()=>{func_update_item(ss_texts)}) as a.func_event}
        />
        {is_undo ? <BUTTON_CLICK
            name={"apply change" as a.name}
            func_event={(()=>{func_cancel()}) as a.func_event}
        /> : <></>}
        <BUTTON_CLICK
            name={"reset all" as a.name}
            func_event={(()=>{
                func_update_item(ss_defaults.map((item)=>{
                    return item as string
                }))
            }) as a.func_event}
        />
    </>
}
