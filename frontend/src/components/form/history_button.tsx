import React from "react";
import * as a from "../../type/alias";
import { history } from "../../type/history";
import Click_button from "../ui/click_button";

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
}:{history:a.use_state_t<history<t>>}
){
    function prev_func(){
        if (history.ss?.components.prev != undefined){
            history.setss(({
                    components: history.ss?.components.prev,
                    length: history.ss
                }) as unknown as history<t>)
        }
    }
    function next_func(){
        if (history.ss?.components.next != undefined){
            history.setss(({
                    components: history.ss?.components.next,
                    length: history.ss
                }) as unknown as history<t>)
        }
    }
    let jsx_prev_button = <Click_button name={"=>" as a.name} func_event={(()=>{prev_func()}) as a.func_event}/>
    let jsx_next_button = <Click_button name={"=>" as a.name} func_event={(()=>{next_func()}) as a.func_event}/>
    return <>
        {jsx_prev_button}
        {jsx_next_button}
    </>
}