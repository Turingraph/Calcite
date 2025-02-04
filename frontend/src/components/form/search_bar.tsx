import React, { JSX, useEffect, useState } from "react";
import * as a from "../../type/alias"
import Str_input from "../ui/str_input";

export default function Search_bar<t extends a.obj_t>(
{
    opt_name = undefined,
    read_only_arr,
    search_arr
}:{
    opt_name:a.opt_name,
    read_only_arr:t[],
    search_arr:t[]
}){
    let let_search_text = {value:""} as a.value_t<string>
    useEffect(()=>{
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/arr/filter
         search_arr = read_only_arr.filter(
            (i) => {i.name.includes(let_search_text.value) == true}
            )
    },[let_search_text])
    return (<>
        <Str_input
            opt_name={opt_name}
            input = {let_search_text}
        />
    </>)
}
