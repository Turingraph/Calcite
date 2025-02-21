import {useLayoutEffect, useReducer, useRef} from "react";
import * as a from "../../type/alias"
import BUTTON_CLICK from "../button/button_click";
import INPUT_STR from "../input/input_str";
import {STR_TO_H, str_to_default_num} from "../../utils/convert";
import { method_update_item, method_update_item_attr, method_include_arr } from "../../utils/arr_method";
import { arr_attr_t } from "../../type/obj";

export type obj_str_uit<t extends object> = {
    opt_name?:a.opt_name
    arr:a.use_state_t<t[]>,
    this_item:number,
    attrs:string[]
    is_undo?:boolean,
}

function func_get_attr<t extends object>(item:t, attrs:string[]){
    // https://www.geeksforgeeks.org/typescript-array-keys-method/
    const CONST_ITEM : { [key: string]: any } = item
    const ARR_ALL = Object.keys(CONST_ITEM).map((item)=>{return item as string})
    const CONST_ATTR = method_include_arr(
        ARR_ALL,
        attrs, 
    ) as (keyof typeof CONST_ITEM)[]
    return CONST_ATTR
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function func_set_default<t extends object>(arr:t[], this_item:number, attrs:string[]){
    const CONST_ATTR = func_get_attr(arr[this_item], attrs)
    return CONST_ATTR.map((item)=>{
        return (arr[this_item] as { [key: string]: any })[item]
    }) as t[]
}

// https://stackoverflow.com/questions/41385059/
// possible-to-extend-types-in-typescript
function reduce_texts<t extends object>(
    state:string[], 
    action:arr_attr_t<t> & {input_arr:string[]|undefined}){
        if (action.input_arr !== undefined){
            return action.input_arr
        }
        return func_set_default(action.arr, action.this_item, action.attrs) as unknown as string[]
}

function reduce_default<t extends object>(
    state:t[], 
    action:arr_attr_t<t>){
        return func_set_default(action.arr, action.this_item, action.attrs)
}

export default function OBJ_STR<
    t extends object>({
        opt_name = undefined,       
        arr  ,   
        this_item,              
        attrs  ,  
        is_undo = false
}:obj_str_uit<t>){
    // https://stackoverflow.com/questions/53446020/
    // how-to-compare-oldvalues-and-newvalues-on-react-hooks-useLayoutEffect
    // https://react.dev/reference/react/useRef
    const ss_arr_length = useRef(arr.ss.length)
    const [ss_default_arr, setss_default_arr] = useReducer(
        reduce_default,
        func_set_default(arr.ss, this_item, attrs)
    )

    const [ss_texts, setss_texts] = useReducer(
        reduce_texts,
        func_set_default(arr.ss, this_item, attrs) as unknown as string[]
    )

    // https://react.dev/reference/react/useLayoutEffect
    
    useLayoutEffect(()=>{
        const COPY_ARR = [...arr.ss]
        setss_texts({
            arr: COPY_ARR, this_item: this_item, attrs: attrs,
            input_arr: undefined
        })
    }, [arr.ss, attrs, this_item])

    useLayoutEffect(()=>{
        if(ss_arr_length.current !== arr.ss.length){
            const COPY_ARR = [...arr.ss]
            setss_default_arr({arr:COPY_ARR, this_item:this_item, attrs:attrs})
        }
        ss_arr_length.current = arr.ss.length
    },[ss_texts, arr.ss, attrs, this_item])

    // https://stackoverflow.com/questions/57438198/
    // typescript-element-implicitly-has-an-any-type-because-expression-of-type-st
    const CONST_ITEM : { [key: string]: any } = arr.ss[this_item]
    const CONST_ATTR = func_get_attr(arr.ss[this_item], attrs)
    const COPY_ARR = [...arr.ss]
    function func_set_item_attr(input_arr:string[]){
        CONST_ATTR.forEach((item, index)=>{
            let let_input:number|string = (input_arr[index])
            if (typeof CONST_ITEM[item] === 'number'){
                if (typeof ss_default_arr[index] === 'number'){
                    let_input = str_to_default_num(
                        ss_default_arr[index] as unknown as number,
                        let_input as string
                    ) as number
                }
                else{
                    let_input = str_to_default_num(
                        0,
                        let_input as string
                    ) as number
                }
            }
            method_update_item_attr(
                this_item,
                arr,
                item as typeof CONST_ITEM[number],
                let_input
            )
        })
        setss_texts({
            arr: COPY_ARR, this_item: this_item, attrs: attrs,
            input_arr: input_arr
        })
    }
    const JSX_INPUTS = CONST_ATTR.map((item,index)=>{
        return <div key={index}>
            <STR_TO_H opt_name={item as a.opt_name}/>
            <INPUT_STR
                opt_name={item as a.opt_name}
                input={{
                    ss:ss_texts[index],
                    setss:((e:string) =>{
                        method_update_item(
                            index,
                            {ss:ss_texts, 
                            setss:((e:string[])=>{setss_texts({
                                arr: COPY_ARR, this_item: this_item, attrs: attrs,
                                input_arr: e
                            })})},
                            e
                        )}
                    )
                } as unknown as a.use_state_t<string>}
            />
        </div>
    })
    function func_set_cancel(){
        const UPDATE_TEXTS = CONST_ATTR.map((item)=>{
            return CONST_ITEM[item] as string
        })
        setss_texts({
            arr: COPY_ARR, this_item: this_item, attrs: attrs,
            input_arr: UPDATE_TEXTS
        })
    }
    return <>
    <STR_TO_H opt_name={opt_name}/>
    {JSX_INPUTS}
    <BUTTON_CLICK
        name={"apply change" as a.name}
        func_event={(()=>{func_set_item_attr(ss_texts as typeof CONST_ITEM[number][])}) as a.func_event}
    />
    {is_undo ? <BUTTON_CLICK
        name={"cancel change" as a.name}
        func_event={(()=>{func_set_cancel()}) as a.func_event}
    /> : <></>}
    <BUTTON_CLICK
        name={"reset all" as a.name}
        func_event={(()=>{func_set_item_attr(ss_default_arr as typeof CONST_ITEM[number][])}) as a.func_event}
    />
    </>
}