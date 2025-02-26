import { useState, useRef, useEffect, useLayoutEffect} from "react";
import * as a from "../../type/alias"
import INPUT_STR from "../input/input_str";
import { opt_mode_uit } from "./type";
import "./index.css"
import { str_to_optmode } from "../../utils/convert";

/*
https://overreacted.io/a-complete-guide-to-useeffect/#dont-lie-to-react-about-dependencies
*/
// How to make function accept prop based on attr
// https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
// https://www.w3schools.com/typescript/typescript_keyof.php

// Do not use `ref` and `key` as prop name.
// https://legacy.reactjs.org/warnings/special-props.html

export default function SEARCH_BAR<t extends {name:a.name}>(
{
    opt_name = undefined,
    read_only_arr,
    setss_select_arr,
}:{
    opt_name?:a.opt_name,
    read_only_arr:(t|string)[],
    setss_select_arr:React.Dispatch<React.SetStateAction<opt_mode_uit[]>>
}){
    const [ss_search_text, setss_search_text] = useState<string>("")
    const ref_READ_ONLY_ARR = useRef(str_to_optmode(read_only_arr))

    // use useRef in order to avoid both 
    // React Hook useLayoutEffect has a missing dependency and Maximum update depth exceeded.
    /* eslint-disable react-hooks/exhaustive-deps */
    useLayoutEffect(()=>{
        ref_READ_ONLY_ARR.current = str_to_optmode(read_only_arr)
        
        // TOPIC : [] vs no second argument in useEffect
        // *    componentDidMount
        // *    it only runs once.
        // no second argument 
        // *    componentDidMount and componentDidUpdate
        // *   as in it runs first on mount and then on every re-render.
        // https://stackoverflow.com/questions/58579426/
        // in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an

        // TOPIC : React Hook useEffect has a missing dependency
        // useEffect and useLayoutEffect are used for executing the function every time when open the window 
        // or when update the variable. 
        // 1.   The first argument is the function that is executed.
        // 2.   The second argument in the useEffect Hook and is used to specify the variables the effect depends on.
        // When the useEffect is updated when the variable is not updated properly, it might cause unexpected behavior.
        // However the ref_READ_ONLY_ARR is only used once as the read only variable, so we will ignore this warning.
        // https://kinsta.com/knowledgebase/react-hook-useeffect-has-a-missing-dependency/

        // TOPIC : How to ignore this warning ?
        // https://www.geeksforgeeks.org/
        // how-to-fix-missing-dependency-warning-when-using-useeffect-hook/
    },[])
    /* eslint-disable react-hooks/exhaustive-deps */
    
    // Update ss_select_arr such that it match with the ss_search_text
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
