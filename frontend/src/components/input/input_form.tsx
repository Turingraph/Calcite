import React , {useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../button/click_button";
import Input_str from "./input_str";
import {Str_to_h} from "../../utils/convert";
import { input_t } from "../../type/input";

export default function Input_form({
    opt_name = undefined,
    arr,
}:{
    opt_name?:a.opt_name|undefined
    arr:input_t<string|number>[]
}){
    const [ss_texts, setss_texts] = useState<string[]>(arr.map((item)=>{return item.input.ss.toString()}))
    // https://stackoverflow.com/questions/64452484/
    // how-can-i-safely-access-caught-error-properties-in-typescript
    function func_update_texts(index:number, update_input:string){
        let update_texts = [...ss_texts]
        update_texts[index]  = update_input
        setss_texts(update_texts)
    }
    function func_default(item:input_t<string|number>){
        return item.default_input?item.default_input:0
    }
    function func_set_default(){
        arr.map((item, index)=>{
            item.input.setss(func_default(item))
            func_update_texts(index,func_default(item).toString())
        })
    }
    function func_set_ok(){
        arr.map((item, index)=>{
            const item_t = typeof item.default_input;
            let let_input:typeof item_t;
            try{
                typeof item_t === "number"
                ?let_input = Number(ss_texts[index]) as typeof item_t
                :let_input = ss_texts[index] as typeof item_t
            }
            catch{
                let_input = item.default_input as typeof item_t
            }
            item.input.setss(let_input as typeof item_t)
            func_update_texts(index, let_input.toString())
        })
    }
    function func_set_cancel(){
        arr.map((item, index)=>{
            func_update_texts(index, item.input.ss.toString())
        })
    }
    let jsx_elements = arr.map((item,index)=>{
        return <>
        <Str_to_h opt_name={item.opt_name}/>
        <Input_str
            opt_name={undefined}
            input={{ ss: ss_texts, setss: ((e:string) => { func_update_texts(index, e); }) } as unknown as a.use_state_t<string>}
        />
        </>
    })
    return <>
        <Str_to_h opt_name={opt_name}/>
        {jsx_elements}
        <Click_button
            name={"apply change" as a.name}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        <Click_button
            name={"cancel change" as a.name}
            func_event={(()=>{func_set_cancel()}) as a.func_event}
        />
        <Click_button
            name={"reset all" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}