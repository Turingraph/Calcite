import React, { useEffect, useState } from "react";
import * as a from "../../type/alias"
import Input_str from "../input/input_str";
import { opt_mode_t } from "../../type/input";

// How to make function accept prop based on property
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

export default function Search_bar<t extends object, k extends keyof t>(
{
    opt_name = undefined,
    read_only_arr,
    search_arr,
    property
}:{
    opt_name:a.opt_name,
    read_only_arr:t[],
    search_arr:a.use_state_t<(opt_mode_t|undefined)[]>
    property:k
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
        let update_search_text = read_only_arr.map((item,index) => {
                if ((item[property] as string).includes(ss_search_text) == true){
                    return {
                        name:item[property] as string as a.name,
                        index:index
                    }
                }
            })
        search_arr.setss(update_search_text)
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
