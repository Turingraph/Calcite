import { useEffect, useState } from "react";
import * as a from "../../type/alias"
import Input_str from "../input/input_str";
import { opt_mode_uit } from "./type";

// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function Search_bar<t extends object, k extends keyof t>(
{
    opt_name = undefined,
    read_only_arr,
    select_arr,
    attr
}:{
    opt_name?:a.opt_name,
    read_only_arr:t[],
    select_arr:a.use_state_t<opt_mode_uit[]>
    attr:k
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
        const UPDATE_SEARCH_TEXT = read_only_arr.map((item,index) => {
                if ((item[attr] as string).includes(ss_search_text) === true){
                    return {
                        name:item[attr] as string as a.name,
                        index:index
                    }
                }
            }) as opt_mode_uit[]
        select_arr.setss(UPDATE_SEARCH_TEXT)
    },[ss_search_text])

    return (<>
        <Input_str
            opt_name={opt_name}
            input = {{
                ss: ss_search_text,
                setss: setss_search_text
            } as unknown as a.use_state_t<string>}
        />
    </>)
}
