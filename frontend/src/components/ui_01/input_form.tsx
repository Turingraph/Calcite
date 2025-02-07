import React , {useState} from "react";
import * as a from "../../type/alias"
import Click_button from "../ui_00/click_button";
import Input_str from "../ui_00/input_str";
import Str_to_h from "../../utils/str_to_h";

// https://www.geeksforgeeks.org/
// how-to-create-conditional-types-in-typescript/
// export type num_or_str_t<t> = t extends {
//     typeof : number | string
// } ? t : "Invalid Type Error: Tye should only be number or string\nfrom frontend/src/components/ui_01/input_form.tsx"

export type input_form_t<t> = {
    opt_name:a.opt_name
    real_input:a.use_state_t<t>
    show_input:a.use_state_t<string>
    default_input:t
}

export type input_form_str = input_form_t<string|number>

export default function Input_form({
    arr,
}:{
    arr:input_form_str[],
}){
    // https://stackoverflow.com/questions/64452484/
    // how-can-i-safely-access-caught-error-properties-in-typescript
    function func_set_default(){
        arr.map((item)=>{
            item.real_input.setss(item.default_input)
            item.show_input.setss(item.default_input.toString())
        })
    }
    function func_set_ok(){
        arr.map((item)=>{
            let let_input:typeof item.default_input;
            try{
                typeof item.default_input === "number"
                ?let_input = Number(item.show_input.ss) as typeof item.default_input
                :let_input = item.show_input.ss as typeof item.default_input
            }
            catch{
                let_input = item.default_input as typeof item.default_input
            }
            item.real_input.setss(let_input as typeof item.default_input)
            item.show_input.setss(let_input.toString())
        })
    }
    let jsx_elements = arr.map((item)=>{
        return <>
        <Str_to_h opt_name={item.opt_name}/>
        <Input_str
            opt_name={undefined}
            input={{ss:item.show_input.ss, setss:item.show_input.setss} as a.use_state_t<string>}
        />
        </>
    })
    return <>
        {jsx_elements}
        <Click_button
            name={"Apply Change" as a.name}
            func_event={(()=>{func_set_ok()}) as a.func_event}
        />
        <Click_button
            name={"Cancel Change" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
        <Click_button
            name={"Reset All" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}