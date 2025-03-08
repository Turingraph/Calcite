import { sort_arr } from "./utility";
import * as oarr from "./func_arrobj"

export type act_arr_t<t> = {
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
    type:"SET",
    input: t[],
})
export default function act_arr<t>
    (prev_arr:t[], action:act_arr_t<t>){
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
        case "SET": {
            const C_SORT_ARR = sort_arr(
                action.input,
                action.sort
            )
            return C_SORT_ARR
        }
        default: { 
           console.log("--------------------------------------------------------------------")
           console.log("The action.type of useArr is invalid.")
           console.log("The action.type should be \"SORT\"|\"PUSH\"|\"DELETE\"|\"EDIT\"|\"SET\"")
           console.log("Warning from frontend/ src/ src/ hook/ useObjArr.tsx/ function reducer")
           console.log("--------------------------------------------------------------------")
           const C_COPY_ARR = [...prev_arr]
           return C_COPY_ARR
        } 
    }
}

// export default function useArr<t>(init:t[]){
//     const [ss_arr, setss_arr] = useReducer(reducer, init);
//     return [ss_arr, setss_arr]
// }

/*
https://stackoverflow.com/questions/69678018/
i-wrote-a-custom-state-hook-using-usereducer-is-it-dangerous-to-use-react-ts

A "reducer" is a function that takes the previous state and an "action" and returns a new state. 
The action meant to be an instruction rather a state.
*/

export type use_arr_t<t> = {
    ss:t[],
    setss:React.ActionDispatch<[action: act_arr_t<t>]>
}

export type setss_arr_t<t> = React.ActionDispatch<[action: act_arr_t<t>]>
