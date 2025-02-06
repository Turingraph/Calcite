import React , {useState} from "react";
import * as a from "../../type/alias"
import Str_input from "../ui_00/str_input";
import Click_button from "../ui_00/click_button";
import Str_to_h from "../../utils/str_to_h";

export default function Num_input({
    opt_name = undefined,
    input,
    default_value
}:{
    opt_name:a.opt_name,
    input:a.use_state_t<number>
    default_value:number
}){
    const [ss_str_input, setss_str_input] = useState<string>("")
    function func_set_default(){
        input.setss(default_value)
        setss_str_input(default_value.toString())
    }
    function func_set_input(){
        let is_num = /^\d+$/.test(ss_str_input);
        // https://stackoverflow.com/questions/1779013/
        // check-if-string-contains-only-digits
        if (is_num ===true){
            input.setss(Number(ss_str_input))
        }
        else{
            func_set_default()
        }
    }
    return <>
        <Str_to_h opt_name={opt_name}/>
        <Str_input
            opt_name={opt_name}
            input={{ss:ss_str_input, setss:setss_str_input}}
        />
        <Click_button
            name={"Ok" as a.name}
            func_event={(()=>{func_set_input()}) as a.func_event}
        />
        <Click_button
            name={"Reset" as a.name}
            func_event={(()=>{func_set_default()}) as a.func_event}
        />
    </>
}