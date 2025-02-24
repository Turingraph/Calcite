import {useLayoutEffect, useState, useRef} from "react";
import * as a from "../../type/alias";
import BUTTON_CLICK from "./button_click";
import OPT_INPUT from "../opt/opt_input";
import "./index.css"

export default function BUTTON_HISTORY<t>({
    history,
}:{history:a.use_state_t<a.history<t>>}
){
    const [ss_mode, setss_mode] = useState<number>(history.ss.current)
    const ref_mode = useRef(ss_mode)
    
    useLayoutEffect(()=>{
        if(ref_mode.current !== ss_mode){
            history.setss(({
                arr:history.ss.arr,
                commit: history.ss.commit,
                current: ss_mode,
            }) as unknown as a.history<t>)
        }
        ref_mode.current = ss_mode
    },[ss_mode, history])
    function prev_func(){
        if (history.ss.current - 1 > 0){
            history.setss(({
                    arr:history.ss.arr,
                    commit: history.ss.commit,
                    current: history.ss.current - 1,
                }) as unknown as a.history<t>)
            setss_mode(history.ss.current - 1)
        }
    }
    function next_func(){
        if (history.ss.current + 1 < history.ss.arr.length){
            history.setss(({
                arr:history.ss.arr,
                commit: history.ss.commit,
                current: history.ss.current + 1,
                }) as unknown as a.history<t>)
                setss_mode(history.ss.current + 1)
        }
    }
    const JSX_PREV_BUTTON = <BUTTON_CLICK name={"<=" as a.name} func_event={(()=>{prev_func()}) as a.func_event}/>
    const JSX_NEXT_BUTTON = <BUTTON_CLICK name={"=>" as a.name} func_event={(()=>{next_func()}) as a.func_event}/>
    const JSX_HISTORY_BUTTON = <OPT_INPUT
        opt_name={"History" as a.opt_name}
        available_opts={history.ss.commit}
        ss_mode={{ss:ss_mode, setss:setss_mode} as a.use_state_t<number|undefined>}
        is_search_bar={true}
    />
    return <>
        {JSX_PREV_BUTTON}
        {JSX_NEXT_BUTTON}
        {JSX_HISTORY_BUTTON}
    </>
}