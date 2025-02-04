import React, { JSX, useEffect, useState } from "react";
import * as a from "../../type/alias"
import Str_input from "../ui/str_input";

export default function Search_bar<t extends {name:a.name}>(
{
    opt_name = undefined,
    read_only_arr,
    ss_search_arr
}:{
    opt_name:a.opt_name,
    read_only_arr:t[],
    ss_search_arr:a.use_state_t<t[]>
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
        ss_search_arr.setss(read_only_arr.filter(
            (i) => {i.name.includes(ss_search_text) == true}
            ))
    },[ss_search_text])
    
    return (<>
        <Str_input
            opt_name={opt_name}
            input = {{
                ss: ss_search_text,
                setss: setss_search_text
            } as unknown as a.use_state_t<string>}
        />
    </>)
}
