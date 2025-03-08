import * as oarr from "./func_objarr"
import * as a from "../type/alias"
// import { useReducer } from "react"

// Learn Custom Hooks In 10 Minutes
// https://youtu.be/6ThXsUwLWvc?si=TOVkyJuod3AuQxMS

// How Did I Not Know This TypeScript Trick Earlier??!
// https://youtu.be/9i38FPugxB8?si=G9EBCw2mXhiQ2dMz

export type act_objarr_t<
    t extends object[], 
    k extends keyof t[number], 
    o extends t[number][k]> = {
    sort?:oarr.sort_t<t,k>|undefined
} & ({
    type:"SORT"
} | {
    type:"PUSH",
    input:t[number]
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
    input:t[number],
}
| {
    type:"SET",
    input:t,
})

export default function act_objarr<
t extends object[], 
k extends keyof t[number], 
o extends t[number][k]>
    (prev_arr:t, action:act_objarr_t<t,k,o>){
    switch(action.type) { 
        case "SORT": { 
            const C_COPY_ARR = [...prev_arr]
            const C_SORT_ARR = oarr.sort_arr(
                C_COPY_ARR,
                action.sort)
            return C_SORT_ARR as t
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
            return C_SORT_ARR as t
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
            return C_SORT_ARR as t
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
            return C_SORT_ARR as t
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
            return C_SORT_ARR as t
        } 
        case "SET": {
            const C_COPY_ARR = [...prev_arr]
            const C_SORT_ARR = oarr.sort_arr(
                C_COPY_ARR,
                action.sort
            )
            return C_SORT_ARR as t
        }
        default: { 
           console.log("--------------------------------------------------------------------")
           console.log("The action.type of useObjArr is invalid.")
           console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT_ITEM\"|\"EDIT_ATTR\"|\"SET\"")
           console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
           console.log("--------------------------------------------------------------------")
           const C_COPY_ARR = [...prev_arr]
           return C_COPY_ARR as t
        } 
    }
}

export function act_namearr<
    t extends {name:a.name}[], 
    k extends keyof t[number], 
    o extends t[number][k]>(prev_arr:t, action:(act_objarr_t<t,k,o> | {type:"COPY", index:number})){
    switch (action.type){
        case "COPY":{
            const C_COPY_ARR = [...prev_arr]
            const C_UPDATE = oarr.copy_unique_item(
                C_COPY_ARR,
                action.index
            )
            return C_UPDATE as t
        }
        default: {
            if(action.sort === undefined){
                action.sort = {
                    attr:"name",
                    mode:"SORT"
                } as oarr.sort_t<t,k>
            }
            return act_objarr(prev_arr, action)
        }
    }
}

// export function useObjArr<t extends object[]>(init:t){
//     const [ss_objs, setss_objs] = useReducer(act_objarr, init);
//     return [ss_objs, setss_objs]
// }

export type use_objarr_t<t extends object[]> = {
    ss:t,
    setss:React.ActionDispatch<[
        action: act_objarr_t<t, keyof t[number], t[number][keyof t[number]]>
    ]>
}

export type setss_objarr_t<
    t extends object[]
> = React.ActionDispatch<[
    action: act_objarr_t<t, keyof t[number], t[number][keyof t[number]]>
]>

export type use_namearr_t<
    t extends {name:a.name}[]> = {
    ss:t,
    setss:React.ActionDispatch<[
        action: (act_objarr_t<t, keyof t[number], t[number][keyof t[number]]> | {type:"COPY", index:number})
    ]>
}

export type setss_namearr_t<
    t extends {name:a.name}[]
> = React.ActionDispatch<[
    action: (act_objarr_t<t, keyof t[number], t[number][keyof t[number]]> | {type:"COPY", index:number})
]>
