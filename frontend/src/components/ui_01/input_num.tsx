import React , {useState} from "react";
import * as a from "../../type/alias"
import Input_str from "../ui_00/input_str";
import Click_button from "../ui_00/click_button";
import {Str_to_h} from "../../utils/convert";
import { input_t } from "../../type/input";

export default function Input_num({
    opt_name = undefined,
    input,
    default_input = 0
}:input_t<number>){
    const [ss_input_str, setss_input_str] = useState<string>("")
    function func_set_default(){
        input.setss(default_input)
        setss_input_str(default_input.toString())
    }
    function func_set_input(){
        let is_num = /^\d+$/.test(ss_input_str);
        // https://stackoverflow.com/questions/1779013/
        // check-if-string-contains-only-digits
        is_num ===true
            ? input.setss(Number(ss_input_str))
            :func_set_default()
    }
    let jsx_buttons = <>
        <Click_button
            name={"Ok" as a.name}
            func_event={(()=>{func_set_input()}) as a.func_event}
        />
        <Click_button
            name={"Reset" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
        </>
    return <>
        <Str_to_h opt_name={opt_name}/>
        <Input_str
            opt_name={opt_name}
            input={{ss:ss_input_str, setss:setss_input_str}}
        />
        {jsx_buttons}
    </>
}