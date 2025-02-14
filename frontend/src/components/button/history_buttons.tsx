import React, {useEffect, useState} from "react";
import * as a from "../../type/alias";
import Click_button from "./click_button";
import Input_opt from "../search/input_opt";

export default function History_buttons<t>({
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
        if (history.ss.current - 1 > 0){
            history.setss(({
                    arr:history.ss.arr,
                    commit: history.ss.commit,
                    current: history.ss.current - 1,
                }) as unknown as a.history<t>)
        }
    }
    function next_func(){
        if (history.ss.current + 1 < history.ss.arr.length){
            history.setss(({
                arr:history.ss.arr,
                commit: history.ss.commit,
                current: history.ss.current + 1,
                }) as unknown as a.history<t>)
        }
    }
    const JSX_PREV_BUTTON = <Click_button name={"<=" as a.name} func_event={(()=>{prev_func()}) as a.func_event}/>
    const JSX_NEXT_BUTTON = <Click_button name={"=>" as a.name} func_event={(()=>{next_func()}) as a.func_event}/>
    const JSX_HISTORY_BUTTON = <Input_opt
        opt_name={"Open History" as a.opt_name}
        available_opts={history.ss.commit}
        ss_mode={{ss:ss_mode, setss:setss_mode} as a.use_state_t<number>}
        is_search_bar={true}
    />
    return <>
        {JSX_PREV_BUTTON}
        {JSX_NEXT_BUTTON}
        {JSX_HISTORY_BUTTON}
    </>
}