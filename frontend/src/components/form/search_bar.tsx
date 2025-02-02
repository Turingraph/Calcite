import React, { JSX, useEffect, useState } from "react";
import * as a from "../../type/alias"
import Str_input from "../ui/str_input";

export default function Search_bar<t extends a.obj_t>(
{
    opt_name = undefined,
    read_only_arr,
    ss_search_arr
}:{
    opt_name:a.opt_name,
    read_only_arr:t[],
    ss_search_arr:a.use_state_t<t[]>
}){
    const [ss_input, setss_input] = useState<string>("");
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
         ss_search_arr.setss(read_only_arr.filter(
            (i) => {i.name.includes(ss_input) == true}
            ));
    },[ss_input])

    return (<>
        <Str_input
            opt_name={opt_name}
            input = {{ss:ss_input, setss:setss_input}}
        />
    </>)
}
