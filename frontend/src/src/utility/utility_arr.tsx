import * as a from "../type/alias";

/*
Rule of every function in this file.
1.  It should takes t[] or a.use_state_t<t[]> as it's input
2.  import * as uarr from ".../utils/utils_arr"

Note that the order of the object with name property (e.g. image, box around the text etc)
always sorted in alphabet name order, and user unable to change the order of the object.

So every time the user change the name of the objects and/or create new object,
`update_item_name` and `push_arr_name` must also sort the order of the text automatically.
*/

//----------------------------------------------------------------------------------------

// TITLE: SORT

export function sort_arr_attr<t extends object, k extends keyof t>(
    arr:t[],
    attr:k,
    is_sort:"NO_SORT"|"SORT"|"REVERSE" = "SORT"
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings
    if(is_sort==="SORT"){
        return arr.sort((n0, n1) => n0[attr] < n1[attr] ? -1 : 1)
    }
    else if(is_sort === "NO_SORT"){
        return arr
    }
    else{
        return arr.sort((n0, n1) => n0[attr] > n1[attr] ? -1 : 1)
    }
}

export function sort_arr<t>(
        arr:t[],
        is_sort:"NO_SORT"|"SORT"|"REVERSE" = "SORT"
    ){
    // https://stackoverflow.com/questions/40472548/
    // typescript-sort-strings-descending
    if(is_sort==="SORT"){
        return arr.sort((n0, n1) => n0 < n1 ? -1 : 1)
    }
    else if(is_sort === "NO_SORT"){
        return arr
    }
    else{
        return arr.sort((n0, n1) => n0 > n1 ? -1 : 1)
    }
}

//----------------------------------------------------------------------------------------

// TITLE: UPDATE

export function update_item<t>(
        index:number, 
        arr:a.use_state_t<t[]>, 
        update_input:t){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR[index]  = update_input
    arr.setss(UPDATE_ARR)
}

export function update_item_name<t extends {name:a.name}>(
    index:number, 
    arr:a.use_state_t<t[]>, 
    update_input:a.name|string,
    is_sort:"NO_SORT"|"SORT"|"REVERSE" = "NO_SORT"){
let update_arr = [...arr.ss]
update_arr[index].name  = update_input as a.name
update_arr = sort_arr_attr(update_arr, "name", is_sort)
arr.setss(update_arr)
}

export function update_item_attr<
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

//----------------------------------------------------------------------------------------

// TITLE: PUSH

export function copy_unique_item<t extends {name:a.name}>(
    index:number,
    arr:a.use_state_t<t[]>,
    // is_sort:"NO_SORT"|"SORT"|"REVERSE" = "NO_SORT"
){
    let update_arr = [...arr.ss]
    const NEW_OBJ:t = JSON.parse(JSON.stringify(arr.ss[index]))
    const NAME = NEW_OBJ.name.split(".")
    const NEW_NAME = NAME[0] + "_clone." + NAME.slice(1, NAME.length)
    NEW_OBJ.name = NEW_NAME as a.name
    update_arr.splice(index + 1, 0, NEW_OBJ)
    // update_arr = sort_arr_attr(update_arr,"name", is_sort)
    arr.setss(update_arr)
}

export function push_arr<t>(
    input:t,
    arr:a.use_state_t<t[]>,
    is_sort:"NO_SORT"|"SORT"|"REVERSE" = "NO_SORT"
){
    let update_arr = [...arr.ss]
    update_arr.push(input)
    if(typeof arr.ss[0] !== 'object'){
        update_arr = sort_arr(update_arr, is_sort)
    }
    arr.setss(update_arr)
}

export function push_arr_attr<t extends object, k extends keyof t>(
    input:t,
    arr:a.use_state_t<t[]>,
    attr:k|undefined = undefined,
    is_sort:"NO_SORT"|"SORT"|"REVERSE" = "NO_SORT"
){
    let update_arr = [...arr.ss]
    update_arr.push(input)
    if(attr !== undefined){
        update_arr = sort_arr_attr(update_arr, attr, is_sort)
    }
    arr.setss(update_arr)
}

export function push_arr_name<t extends {name:a.name}>(
    input:t,
    arr:a.use_state_t<t[]>,
    is_sort:"NO_SORT"|"SORT"|"REVERSE" = "NO_SORT"
){
    push_arr_attr(
        input,
        arr,
        "name",
        is_sort
    )
}

//----------------------------------------------------------------------------------------

// TITLE: UTILITY

export function delete_item<t>(index:number,arr:a.use_state_t<t[]>){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR.splice(index, 1)
    arr.setss(UPDATE_ARR)
}

export function exclude_arr<t>(arr_all:t[], arr_exclude:t[]){
    const CONST_ARR_EXLUDE = arr_exclude.map((item)=>{
        return JSON.stringify(item)
    })
    return arr_all.map((item)=>{
        if(CONST_ARR_EXLUDE.includes(JSON.stringify(item)) === false)
        {
            return item
        }
        return undefined
    }).filter((item)=> item !== undefined) as t[]
}

export function include_arr<t>(arr_all:t[], arr_include:t[]){
    const CONST_ARR_INLUDE = arr_include.map((item)=>{
        return JSON.stringify(item)
    })
    return arr_all.map((item)=>{
        if(CONST_ARR_INLUDE.includes(JSON.stringify(item)) === true)
        {
            return item
        }
        return undefined
    }).filter((item)=> item !== undefined) as t[]
}
