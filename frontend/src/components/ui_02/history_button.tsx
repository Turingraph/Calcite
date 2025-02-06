import React, {useEffect, useState} from "react";
import * as a from "../../type/alias";
import Click_button from "../ui_00/click_button";
import Input_option from "../ui_01/input_option";


/*
any = any type
unknown = unknown type

any allow the user to use the any type variable in any unrestricted way.

unknown treat the unknown type variable as variable with unknown type and only
allow the user to use it such that it is consistence with the first initialized 
value.

```
let vAny: any = 10;          // We can assign anything to any
let vUnknown: unknown =  10; // We can assign anything to unknown just like any 


let s1: string = vAny;     // Any is assignable to anything 
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable
```

Reference
*   https://stackoverflow.com/questions/51439843/unknown-vs-any
*/

export default function History_button<t>({
    history,
}:{history:a.use_state_t<a.history<t>>}
){
    const [ss_mode, setss_mode] = useState<number>(history.ss.current)
    useEffect(()=>{
        history.setss(({
            arr:history.ss.arr,
            commit: history.ss.commit,
            current: ss_mode,
        }) as unknown as a.history<t>)
    },[ss_mode])
    function prev_func(){
        if (history.ss.current - 1 >= 0){
            history.setss(({
                    arr:history.ss.arr,
                    commit: history.ss.commit,
                    current: history.ss.current - 1,
                }) as unknown as a.history<t>)
        }
    }
    function next_func(){
        if (history.ss.current + 1 <= history.ss.arr.length){
            history.setss(({
                arr:history.ss.arr,
                commit: history.ss.commit,
                current: history.ss.current + 1,
                }) as unknown as a.history<t>)
        }
    }
    let jsx_prev_button = <Click_button name={"=>" as a.name} func_event={(()=>{prev_func()}) as a.func_event}/>
    let jsx_next_button = <Click_button name={"=>" as a.name} func_event={(()=>{next_func()}) as a.func_event}/>
    let jsx_history_button = <Input_option
        opt_name={"Open History" as a.opt_name}
        available_opts={history.ss.commit}
        ss_mode={{ss:ss_mode, setss:setss_mode} as a.use_state_t<number>}
        is_search_bar={true}
    />
    return <>
        {jsx_prev_button}
        {jsx_next_button}
        {jsx_history_button}
    </>
}