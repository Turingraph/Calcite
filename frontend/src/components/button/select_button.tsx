import React, {JSX, useState} from "react";
import * as a from "../../type/alias";
import { func_update_arr } from "../../utils/handle";
import Click_button from "./click_button";

export default function Select_button<t extends {select:a.select}>({
    arr,
    index
}:{
    arr:a.use_state_t<t[]>,
    index:number
}){
    function func_select(index:number){
        let update_input = arr.ss[index]
        update_input.select
            ?update_input.select = false as a.select 
            :update_input.select = true as a.select
        func_update_arr(index, arr, update_input)
    }
    return <>
    <Click_button 
        name={"select" as a.name} 
        func_event={(()=>{func_select(index)}) as a.func_event}
    />
    </>
}