import * as a from "../type/alias";

/*
Rule of every function in this file.
1.  It should begin with `method_`
2.  It should takes array or a.use_state_t<t[]> as it's input
*/

export function method_update_item<t>(
        index:number, 
        arr:a.use_state_t<t[]>, 
        update_input:t){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR[index]  = update_input
    arr.setss(UPDATE_ARR)
}

// https://stackoverflow.com/questions/586182/
// https://medium.com/analytics-vidhya/
// 3-ways-to-copy-by-value-any-composite-data-type-in-javascript-ca3c730e4d2f
export function method_copy_item<t>(
    index:number,
    arr:a.use_state_t<t[]>
){
    const UPDATE_ARR = [...arr.ss]
    const NEW_OBJ = JSON.parse(JSON.stringify(arr.ss[index]))
    UPDATE_ARR.splice(index + 1, 0, NEW_OBJ)
    arr.setss(UPDATE_ARR)
}

export function method_copy_ptr_item<t>(
    index:number,
    arr:a.use_state_t<t[]>
){
    const UPDATE_ARR = [...arr.ss]
    const NEW_OBJ = arr.ss[index]
    UPDATE_ARR.splice(index + 1, 0, NEW_OBJ)
    arr.setss(UPDATE_ARR)
}

export function method_update_arr<t>(
        arr:a.use_state_t<t>[],
        func_event:(e:t)=>void,
        input:t[]
    ){
    arr.map((item, index)=>{
        item.setss(input[index])
        func_event(input[index])
    })
}

export function method_push_arr<t>(
    input:t,
    arr:a.use_state_t<t[]>
){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR.push(input)
    arr.setss(UPDATE_ARR)
}

export function method_delete_item<t>(index:number,arr:a.use_state_t<t[]>){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR.splice(index, 1)
    arr.setss(UPDATE_ARR)
}

export function method_update_item_attr<
    t extends object, 
    k extends keyof t,
    v extends t[k]>(
        index:number,
        arr:a.use_state_t<t[]>,
        attr:k,
        input:v
    ){
        const UPDATE_ARR = [...arr.ss]
        UPDATE_ARR[index][attr] = input
        arr.setss(UPDATE_ARR)
    }

export function method_update_item_attrs<
    t extends object,
    k extends keyof t,
    v extends t[k]>(
        this_item:number,
        arr:a.use_state_t<t[]>,
        attrs:k[],
        input:v[]
    ){
        attrs.map((item, index)=>{
            method_update_item_attr(
                this_item,
                arr,
                item,
                input[index]
            )
        })
    }


export function method_sort_arrattr<t extends object, k extends keyof t>(
    arr:t[],
    attr:k
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings
    if (arr.every(i => typeof i === "number"))
    {
        return arr.sort((n0, n1) => n0[attr] > n1[attr] ? -1 : 1)
    }
    return arr
}

export function method_sort_arr<t>(arr:t[]){
    // https://stackoverflow.com/questions/40472548/
    // typescript-sort-strings-descending
    
    return arr.sort((n0, n1) => n0 > n1 ? -1 : 1)
}

export function method_exclude_arr<t>(arr_all:t[], arr_exclude:t[]){
    return arr_all.map((item)=>{
        const CONST_ARR_EXLUDE = arr_exclude.map(
            (item)=>{return JSON.stringify(item)}
            )
        if(CONST_ARR_EXLUDE.includes(JSON.stringify(item)) === false)
        {
            return item
        }
    }).filter((item)=> item !== undefined) as t[]
}

export function method_include_arr<t>(arr_all:t[], arr_include:t[]){
    return arr_all.map((item)=>{
        const CONST_ARR_INLUDE = arr_include.map(
            (item)=>{return JSON.stringify(item)}
            )
        if(CONST_ARR_INLUDE.includes(JSON.stringify(item)) === true)
        {
            return item
        }
    }).filter((item)=> item !== undefined) as t[]
}

export function method_unique_arr<t>(arr:t[]){
    // https://stackoverflow.com/questions/36829184/
    // how-can-i-convert-a-set-to-an-array-in-typescript
    return Array.from(new Set(arr))
}