import {useReducer} from "react";
import { sort_arr } from "./utility";
import * as oarr from "./funcObjArr"

type action_t<t extends object> = {
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined
} & ({
    type:"SORT"
} | {
    type:"PUSH",
    input:t
}
| {
    type:"DELETE",
    index:number
}
| {
    type:"EDIT",
    index:number,
    input:t,
}
| {
    type:"RESET",
    input: t[],
})
function reducer<t extends object, k extends keyof t, o extends t[k]>
    (prev_arr:t[], action:action_t<t>){
    switch(action.type) { 
        case "SORT": { 
            const C_COPY_ARR = [...prev_arr]
            const C_SORT_ARR = sort_arr(
                C_COPY_ARR,
                action.sort)
            return C_SORT_ARR
        } 
        case "EDIT": { 
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.edit_item(
                C_COPY_ARR,
                action.index,
                action.input
            )
            const C_SORT_ARR = sort_arr(
                C_UPDATE,
                action.sort
            )
            return C_SORT_ARR
        } 
        case "PUSH": { 
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.push_arr(
                C_COPY_ARR,
                action.input
            )
            const C_SORT_ARR = sort_arr(
                C_UPDATE,
                action.sort
            )
            return C_SORT_ARR
        } 
        case "DELETE": { 
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.delete_item(
                C_COPY_ARR,
                action.index
            )
            const C_SORT_ARR = sort_arr(
                C_UPDATE,
                action.sort
            )
            return C_SORT_ARR
        } 
        case "RESET": {
            const C_SORT_ARR = sort_arr(
                action.input,
                action.sort
            )
            return C_SORT_ARR
        }
        default: { 
           console.log("--------------------------------------------------------------------")
           console.log("The action.type of useArr is invalid.")
           console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT\"|\"RESET\"")
           console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
           console.log("--------------------------------------------------------------------")
           const C_COPY_ARR = [...prev_arr]
           return C_COPY_ARR
        } 
    }
}

export default function useArr<t extends object>(init:t[]){
    const [ss_arr, setss_arr] = useReducer(reducer, init);
    return [ss_arr, setss_arr]
}

export type use_arr_t<t extends object> = {
    ss:t[],
    setss:React.ActionDispatch<[action: action_t<t>]>
}
