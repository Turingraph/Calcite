import React , {useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_str from "../input/input_str";
import {Str_to_h} from "../../utils/convert";
import { func_update_item } from "../../utils/crud_arr";
import { func_update_item_attr } from "../../utils/crud_arr";
import { func_handle_num_type } from "../../utils/handle";

export type input_item_attr_uit<
t extends object,
k extends keyof t> = {
    opt_name:a.opt_name
    arr:a.use_state_t<t[]>,
    this_item:number,
    attrs:k[]
    is_undo?:boolean
}

export default function Input_item_attr<
    t extends object,
    k extends keyof t>({
        opt_name,       
        arr  ,   
        this_item,              
        attrs  ,  
        is_undo = false
}:input_item_attr_uit<t,k>){
    const [ss_DEFAULT_ARR, setss_DEFAULT_ARR] = useState<any[]>(
        attrs.map((item, index)=>{
            return arr.ss[index][item]
        }))
    const [ss_texts, setss_texts] = useState<string[]>(
        arr.ss.map((item)=>{
            return item as unknown as string
        })
    )
    function func_set_item_attr(input_arr:t[k][]){
        attrs.map((item, index)=>{
            let let_input = (input_arr[index]) as t[k]
            if (typeof arr.ss[index][attrs[index]] === 'number'){
                if (typeof ss_DEFAULT_ARR[index] === 'number'){
                    let_input = func_handle_num_type(
                        ss_DEFAULT_ARR[index],
                        let_input as string
                    ) as unknown as t[k]
                }
                else{
                    let_input = func_handle_num_type(
                        0,
                        let_input as string
                    ) as unknown as t[k]
                }
            }
            func_update_item_attr(
                this_item,
                arr,
                item,
                let_input
            )
        })
        setss_texts(input_arr as unknown as string[])
    }
    const JSX_INPUT = attrs.map((item,index)=>{
        return <>
            <Input_str
                opt_name={item as a.opt_name}
                input={{
                    ss:ss_texts,
                    setss:((e:string) =>{
                        func_update_item(
                            index,
                            {ss:ss_texts, setss:setss_texts},
                            e
                        )}
                    )
                } as unknown as a.use_state_t<string>}
            />
        </>
    })
    function func_set_cancel(){
        const UPDATE_TEXTS = attrs.map((item)=>{
            return arr.ss[this_item][item] as string
        })
        setss_texts(UPDATE_TEXTS)
    }
    return <>
    <Str_to_h opt_name={opt_name}/>
    {JSX_INPUT}
    <Click_button
        name={"apply change" as a.name}
        func_event={(()=>{func_set_item_attr(ss_texts as unknown as t[k][])}) as a.func_event}
    />
    {is_undo ? <Click_button
        name={"cancel change" as a.name}
        func_event={(()=>{func_set_cancel()}) as a.func_event}
    /> : <></>}
    <Click_button
        name={"reset all" as a.name}
        func_event={(()=>{func_set_item_attr(ss_DEFAULT_ARR as unknown as t[k][])}) as a.func_event}
    />
    </>
}