import {useState} from "react"

/*
RULES OF HOOK
1.  Only call Hooks at the top level 
2.  Only call Hooks from React functions 
    (function that contains hook should 
    begin with big letter, or custom hook)

REFERENCE
-   https://react.dev/reference/rules/rules-of-hooks
*/

/*
How does this not violate Rule of Hook ?

```
export function TEST_01(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            {DONT_USE_HOOK_IN_FUNC_00()} // error
            <DONT_USE_HOOK_IN_FUNC_00/>          // works as expected
        </div>
    })
    return <>
    <Button .../>       // delete item in ss_arr
    <Button ... />      // add new item in ss_arr
    {JSX_ELEMENTS}
    </>
}
```

Given that React update the UI (all JSX.Element) everytime when the Hook is updated,

It is implies that
-   <DONT_USE_HOOK_IN_FUNC_00/> is updated, thus it does not violate React
-   {DONT_USE_HOOK_IN_FUNC_00()} is not updated when the hook is updated.
*/

function DONT_USE_HOOK_IN_FUNC_00<t>(){
    const [ss_texts, setss_texts] = useState<string>("")
    return <>
    <p>Hello</p>
    </>
}

/*
How does this not violate Rule of Hook ?

```
export function TEST_01(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            <DONT_USE_HOOK_IN_FUNC_01 arr={ss_arr}/>  // works as expected
        </div>
    })
    return <>
    <Button .../>       // delete item in ss_arr
    <Button ... />      // add new item in ss_arr
    {JSX_ELEMENTS}
    </>
}
```

This JSX components does not have hook and receive the input arr which 
updated everytime when ss_arr is updated, thus it works as expected.
*/

function DONT_USE_HOOK_IN_FUNC_01<t>({
    arr
}:{
    arr:t[]
}){
    return <>
    <p>Hello</p>
    </>
}

/*
How does this violate Rule of Hook ?

```
export function TEST_01(){
    const [ss_arr, setss_arr] = useState<character_t[]>(CHARACTERS)
    const JSX_ELEMENTS:JSX.Element[] = ss_arr.map((item,index)=>{
        return <div key={index}>
            {DONT_USE_HOOK_IN_FUNC_02({arr:ss_arr})}  // error
            <DONT_USE_HOOK_IN_FUNC_02 arr={ss_arr}/>  // works as expected
        </div>
    })
    return <>
    <Button .../>       // delete item in ss_arr
    <Button ... />      // add new item in ss_arr
    {JSX_ELEMENTS}
    </>
}
```

{DONT_USE_HOOK_IN_FUNC_02({arr:ss_arr})} cause error because of the same reason why 
{DONT_USE_HOOK_IN_FUNC_00()} cause error.
*/

function DONT_USE_HOOK_IN_FUNC_02<t>({
    arr
}:{
    arr:t[]
}){
    const [ss_texts, setss_texts] = useState<string>("")
    return <>
    <p>Hello</p>
    </>
}

/*
LESSON

Always call JSX Element with Hook as JSX Element, not as Function.

NOTE THAT 
-   We discover the bugs when try to test 
    `src/components/obj/obj_str.tsx` in `src/test/obj.tsx/`
*/