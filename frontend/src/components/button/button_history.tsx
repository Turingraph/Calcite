import {useEffect, useState} from "react";
import * as a from "../../type/alias";
import Button_click from "./button_click";
import Opt_input from "../opt/opt_input";

export default function Button_history<t>({
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
    const JSX_PREV_BUTTON = <Button_click name={"<=" as a.name} func_event={(()=>{prev_func()}) as a.func_event}/>
    const JSX_NEXT_BUTTON = <Button_click name={"=>" as a.name} func_event={(()=>{next_func()}) as a.func_event}/>
    const JSX_HISTORY_BUTTON = <Opt_input
        opt_name={"History" as a.opt_name}
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