import {useReducer} from "react";
import * as oarr from "./funcObjArr"

// Learn Custom Hooks In 10 Minutes
// https://youtu.be/6ThXsUwLWvc?si=TOVkyJuod3AuQxMS

// How Did I Not Know This TypeScript Trick Earlier??!
// https://youtu.be/9i38FPugxB8?si=G9EBCw2mXhiQ2dMz

type action_t<t extends object, k extends keyof t, o extends t[k]> = {
    sort?:oarr.sort_t<t,k>|undefined
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
    type:"EDIT_ATTR",
    index:number,
    attr:k,
    input:o,
}
| {
    type:"EDIT_ITEM",
    index:number,
    input:t,
}
| {
    type:"RESET",
    input: t[],
})

function reducer<t extends object, k extends keyof t, o extends t[k]>
    (prev_arr:t[], action:action_t<t,k,o>){
    switch(action.type) { 
        case "SORT": { 
            const C_COPY_ARR = [...prev_arr]
            const C_SORT_ARR = oarr.sort_arr(
                C_COPY_ARR,
                action.sort)
            return C_SORT_ARR
        } 
        case "EDIT_ITEM": { 
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.edit_item(
                C_COPY_ARR,
                action.index,
                action.input
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UPDATE,
                action.sort
            )
            return C_SORT_ARR
        } 
        case "EDIT_ATTR": { 
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.edit_attr(
                C_COPY_ARR,
                action.index,
                action.input,
                action.attr,
            )
            const C_SORT_ARR = oarr.sort_arr(
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
            const C_SORT_ARR = oarr.sort_arr(
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
            const C_SORT_ARR = oarr.sort_arr(
                C_UPDATE,
                action.sort
            )
            return C_SORT_ARR
        } 
        case "RESET": {
            const C_SORT_ARR = oarr.sort_arr(
                action.input,
                action.sort
            )
            return C_SORT_ARR
        }
        default: { 
           console.log("--------------------------------------------------------------------")
           console.log("The action.type of useObjArr is invalid.")
           console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT\"")
           console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
           console.log("--------------------------------------------------------------------")
           const C_COPY_ARR = [...prev_arr]
           return C_COPY_ARR
        } 
    }
}

export default function useObjArr<t extends object>(init:t[]){
    const [ss_objs, setss_objs] = useReducer(reducer, init);
    return [ss_objs, setss_objs]
}

export type use_objarr_t<t extends object> = {
    ss:t[],
    setss:React.ActionDispatch<[action: action_t<t, keyof t, t[keyof t]>]>
}
