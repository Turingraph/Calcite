import { useState, useRef, useEffect} from "react";
import * as a from "../../type/alias"
import INPUT_STR from "../input/input_str";
import { opt_mode_uit } from "./type";
import "./index.css"
import { str_to_optmode } from "../../utils/convert";

// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function SEARCH_BAR(
{
    opt_name = undefined,
    read_only_arr,
    setss_select_arr,
}:{
    opt_name?:a.opt_name,
    read_only_arr:opt_mode_uit[]|string[],
    setss_select_arr:React.Dispatch<React.SetStateAction<opt_mode_uit[]>>
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    const ref_READ_ONLY_ARR = useRef(str_to_optmode(read_only_arr))

    useEffect(()=>{
        const UPDATE_SEARCH_TEXT = ref_READ_ONLY_ARR.current.map((item,index) => {
            if ((item.name as string).includes(ss_search_text) === true){
                return {
                    name:item.name as string as a.name,
                    index:item.index
                }
            }
            return undefined
        }) as opt_mode_uit[]
        setss_select_arr(UPDATE_SEARCH_TEXT)
    },[ss_search_text, setss_select_arr])

    return (<>
        <INPUT_STR
            opt_name={opt_name}
            input = {{
                ss: ss_search_text,
                setss: setss_search_text
            } as a.use_state_t<string>}
        />
    </>)
}
