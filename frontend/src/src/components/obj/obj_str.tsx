import React, { useEffect, useLayoutEffect, useReducer, useRef } from "react"
import act_arr, {ss_arr_t} from "../../array/act_arr"
import { use_arrobj_t } from "../../array/act_arrobj"
import { get_obj_value } from "../../array/utility"
import { arr_to_value } from "../../convert/attr"
import { str_to_default_num } from "../../convert/num"
import { STR_TO_H } from "../../convert/str"
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click"
import INPUT_STR from "../input/input_str"

export default function OBJ_STR<
    t extends object[],
    k extends keyof t[number]>({
    input_arr,
    this_item,
    attrs,
    default_value = undefined,
    is_undo=false
}:{
    input_arr:use_arrobj_t<t,k>,
    this_item:number,
    attrs:k[],
    default_value?:(undefined|a.attr_value<t[k]>[])
    is_undo?:boolean,
}){
    const ref_pigeon_hole = useRef(input_arr.ss.ss.length)
    const [ss_defaults, setss_defaults] = useReducer(
        act_arr,
        {ss:(default_value 
            ? arr_to_value(default_value) 
            : get_obj_value(input_arr.ss.ss[this_item] as t[number], attrs)
        ) as t[number][k][]} as ss_arr_t<t>
    )
    const [ss_texts, setss_texts] = useReducer(
        act_arr,
        { ss: get_obj_value(input_arr.ss.ss[this_item] as t[number], attrs) as string[] } as ss_arr_t<string>
    )

    // Update ss_texts = input_arr.ss
    useEffect(()=>{
        const UPDATE = get_obj_value(input_arr.ss.ss[this_item] as t[number], attrs) as string[]
        setss_texts({
            type:"SET",
            input:UPDATE
        })
    }, [input_arr.ss, this_item, attrs])

    // Update ss_defaults (a.k.a. default value of input_arr.ss[this_index])
    // every time the input_arr.ss is puch or deleted.
    useLayoutEffect(()=>{
        // console.log("GIGACHAD")
        if(ref_pigeon_hole.current !== input_arr.ss.ss.length 
            && default_value === undefined){
            const UPDATE = get_obj_value(input_arr.ss.ss[this_item] as t[number], attrs)
            setss_defaults({
                type:"SET",
                input:UPDATE as t[]
            })
        }
        ref_pigeon_hole.current = input_arr.ss.ss.length
    },[ss_texts, this_item, input_arr.ss, attrs, default_value])

    const C_THIS_ITEM : t[number] = input_arr.ss.ss[this_item]

    function func_update_item(new_input_arr:string[]){
        attrs.forEach((item:k, index)=>{
            let let_input:number|string = new_input_arr[index]
            if (typeof C_THIS_ITEM[item] === "number"){
                if (typeof ss_defaults.ss[index] === "number"){
                    let_input = str_to_default_num(
                        ss_defaults.ss[index] as unknown as number,
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
                    attr:item as k,
                    input:let_input as t[number][k]
                })
            }
        })
    }
    function func_cancel(){
        const UPDATE = get_obj_value(input_arr.ss.ss[this_item] as t[number], attrs) as string[]
        setss_texts({
            type:"SET",
            input:UPDATE
        })
    }
    function func_update_text(e:string,index:number){
        setss_texts({
            type:"EDIT",
            index:index,
            input:e
        })
    }
    const JAX_INPUTS = attrs.map((item, index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={item as a.opt_name}/>
            <INPUT_STR
                opt_name={item as a.opt_name}
                input={{
                    ss:ss_texts.ss[index],
                    setss:((e:string)=>{func_update_text(e,index)}) as ((e:string)=>void)
                    }}
            />
        </div>
    })
    return <>
        {JAX_INPUTS}
        <BUTTON_CLICK
            name={"apply change" as a.name}
            func_event={(()=>{func_update_item(ss_texts.ss)}) as a.func_event}
        />
        {is_undo ? <BUTTON_CLICK
            name={"apply change" as a.name}
            func_event={(()=>{func_cancel()}) as a.func_event}
        /> : <></>}
        <BUTTON_CLICK
            name={"reset all" as a.name}
            func_event={(()=>{
                func_update_item(ss_defaults.ss.map((item)=>{
                    return item.toString()
                }))
            }) as a.func_event}
        />
    </>
}
