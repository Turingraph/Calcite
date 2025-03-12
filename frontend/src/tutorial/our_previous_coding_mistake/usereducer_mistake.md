# Mistake

The Mistake we make is use `useReducer` like this

```
export type act_arr_t<t> = {
    type:"SORT",
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined
} | {
    type:"PUSH",
    input:t
} ...

export default function act_arr<t>
    (prev_arr:t[], action:act_arr_t<t>){
    switch(action.type) { 
        case "SORT": { 
            ...
            return C_SORT_ARR
        } 
        ...
```

In stead of coding like this

```
export type act_arr_t<t> = {
    type:"SORT",
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined
} | {
    type:"PUSH",
    input:t
} ...

export type ss_arr_t<t> = {
    sort?:"NO_SORT"|"SORT"|"REVERSE"|undefined,
    ss:t[]
}

export default function act_arr<t>
    (prev_arr:ss_arr_t<t>, action:act_arr_t<t>){
    switch(action.type) { 
        case "SET_AUTO_SORT":{
            ...
            return {
                ...prev_arr,
                sort:action.sort
            }
        }
        ...
```

Which does not the tricker change.

Reference
-   https://react.dev/reference/react/useReducer#ive-dispatched-an-action-but-the-screen-doesnt-update

