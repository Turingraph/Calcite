import * as oarr from "./func_arrobj"

export type ss_arr_t<t> = {
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined,
    ss:t[],
    unique?:boolean|undefined
}

export type act_arr_t<t> = {
    type:"SORT",
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined,
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
    type:"SET",
    input: t[],
} | {
    type: "SET_AUTO_SORT",
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined,
    unique?:undefined|boolean
} | {
    type:"UNIQUE"
}

export default function act_arr<t>
    (prev_arr:ss_arr_t<t>, action:act_arr_t<t>){
    switch(action.type) { 
        case "SET_AUTO_SORT":{
            return {
                ...prev_arr,
                sort:action.sort,
                unique:action.unique
            }
        }
        case "SORT": { 
            const C_COPY_ARR = [...prev_arr.ss]
            const C_UNIQUE_ARR = oarr.unique_arr(
                C_COPY_ARR,
                prev_arr.unique
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UNIQUE_ARR,
                action.sort ? action.sort : prev_arr.sort)
            return {
                ...prev_arr,
                ss:C_SORT_ARR
            } as ss_arr_t<t>
        } 
        case "UNIQUE":{
            const C_COPY_ARR = [...prev_arr.ss]
            const C_UNIQUE_ARR = oarr.unique_arr(
                C_COPY_ARR,
                true
            )
            return {
                ...prev_arr,
                ss:C_UNIQUE_ARR
            }
        }
        case "EDIT": { 
            const C_COPY_ARR = [...prev_arr.ss]
            const C_UPDATE_ARR = oarr.edit_item(
                C_COPY_ARR,
                action.index,
                action.input
            )
            const C_UNIQUE_ARR = oarr.unique_arr(
                C_UPDATE_ARR,
                prev_arr.unique
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UNIQUE_ARR,
                prev_arr.sort
            )
            return {
                ...prev_arr,
                ss:C_SORT_ARR
            } as ss_arr_t<t>
        } 
        case "PUSH": { 
            const C_COPY_ARR = [...prev_arr.ss]
            const C_UPDATE_ARR = oarr.push_arr(
                C_COPY_ARR,
                action.input
            )
            const C_UNIQUE_ARR = oarr.unique_arr(
                C_UPDATE_ARR,
                prev_arr.unique
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UNIQUE_ARR,
                prev_arr.sort
            )
            return {
                ...prev_arr,
                ss:C_SORT_ARR
            } as ss_arr_t<t>
        } 
        case "DELETE": { 
            const C_COPY_ARR = [...prev_arr.ss]
            const C_UPDATE_ARR = oarr.delete_item(
                C_COPY_ARR,
                action.index
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UPDATE_ARR,
                prev_arr.sort
            )
            return {
                ...prev_arr,
                ss:C_SORT_ARR
            } as ss_arr_t<t>
        } 
        case "SET": {
            const C_UNIQUE_ARR = oarr.unique_arr(
                action.input,
                prev_arr.unique
            )
            const C_SORT_ARR = oarr.sort_arr(
                C_UNIQUE_ARR,
                prev_arr.sort
            )
            return {
                ...prev_arr,
                ss:C_SORT_ARR
            } as ss_arr_t<t>
        }
        default: { 
            console.log("--------------------------------------------------------------------")
            console.log("The action.type of useArr is invalid.")
            console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT\"|\"SET\"")
            console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
            console.log("--------------------------------------------------------------------")
            const C_COPY_ARR = [...prev_arr.ss]
            return {
                ...prev_arr,
                ss:C_COPY_ARR
            } as ss_arr_t<t>
        } 
    }
}

// export function useArr<t>(init:ss_arr_t<t>){
//     const [ss_arr, setss_arr] = useReducer(act_arr, init);
//     return [ss_arr, setss_arr]
// }

/*
https://stackoverflow.com/questions/69678018/
i-wrote-a-custom-state-hook-using-usereducer-is-it-dangerous-to-use-react-ts

A "reducer" is a function that takes the previous state and an "action" and returns a new state. 
The action meant to be an instruction rather a state.
*/

export type use_arr_t<t> = {
    ss:ss_arr_t<t>,
    setss:React.ActionDispatch<[action: act_arr_t<t>]>
}

export type setss_arr_t<t> = React.ActionDispatch<[action: act_arr_t<t>]>
