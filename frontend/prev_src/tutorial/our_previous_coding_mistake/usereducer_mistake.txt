# Mistake

## Wrong Example

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

## Correct Example

Make sure that every case branch copies all of the existing fields when returning the new state:

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

## Reference
-   https://react.dev/reference/react/useReducer#ive-dispatched-an-action-but-the-screen-doesnt-update

