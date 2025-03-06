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
    type:"PUSH"
} & {
    input:t
}
| {
    type:"DELETE"
} & {
    index:number
}
| {
    type:"EDIT_ATTR"
} & {
    index:number,
    attr:k,
    input:o,
}
| {
    type:"EDIT_ITEM"
} & {
    index:number,
    input:t,
}
| {
    type:"RESET"
} & {
    input: t[],
})

function reducer<t extends object, k extends keyof t, o extends t[k]>
    (prev:t[], action:action_t<t,k,o>){
    switch(action.type) { 
        case "SORT": { 
            const COPY_PREV = [...prev]
            const SUPDATE = oarr.sort_arr(
                COPY_PREV,
                action.sort)
            return SUPDATE
        } 
        case "EDIT_ITEM": { 
            const COPY_PREV = [...prev]
            const UPDATE = oarr.edit_item(
                COPY_PREV,
                action.index,
                action.input
            )
            const SUPDATE = oarr.sort_arr(
                UPDATE,
                action.sort
            )
            return SUPDATE
        } 
        case "EDIT_ATTR": { 
            const COPY_PREV = [...prev]
            const UPDATE = oarr.edit_attr(
                COPY_PREV,
                action.index,
                action.input,
                action.attr,
            )
            const SUPDATE = oarr.sort_arr(
                UPDATE,
                action.sort
            )
            return SUPDATE
        } 
        case "PUSH": { 
            const COPY_PREV = [...prev]
            const UPDATE = oarr.push_arr(
                COPY_PREV,
                action.input
            )
            const SUPDATE = oarr.sort_arr(
                UPDATE,
                action.sort
            )
            return SUPDATE
        } 
        case "DELETE": { 
            const COPY_PREV = [...prev]
            const UPDATE = oarr.delete_item(
                COPY_PREV,
                action.index
            )
            const SUPDATE = oarr.sort_arr(
                UPDATE,
                action.sort
            )
            return SUPDATE
        } 
        case "RESET": {
            const SUPDATE = oarr.sort_arr(
                action.input,
                action.sort
            )
            return SUPDATE
        }
        default: { 
           console.log("--------------------------------------------------------------------")
           console.log("The action.type of useObjArr is invalid.")
           console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT\"")
           console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
           console.log("--------------------------------------------------------------------")
           const COPY_PREV = [...prev]
           return COPY_PREV
        } 
    }
}

export default function useObjArr<t extends object>(init:t[]){
    const [ss_objs, setss_objs] = useReducer(reducer, init);
    return [ss_objs, setss_objs]
}

export type use_objarr_t<t extends object> = {
    ss:t[],
    setss:(t[] | React.ActionDispatch<[action: action_t<t, keyof t, t[keyof t]>]>)[]}
