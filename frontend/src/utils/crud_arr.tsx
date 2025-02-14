import * as a from "../type/alias";

export function func_update_item<t>(
        index:number, 
        arr:a.use_state_t<t[]>, 
        update_input:t){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR[index]  = update_input
    arr.setss(UPDATE_ARR)
}

// https://stackoverflow.com/questions/586182/
export function func_copy_item<t>(
    index:number,
    arr:a.use_state_t<t[]>
){
    const UPDATE_ARR = [...arr.ss]
    const NEW_OBJ = arr.ss[index]
    UPDATE_ARR.splice(index + 1, 0, NEW_OBJ)
    arr.setss(UPDATE_ARR)
}

export function func_UPDATE_ARR<t>(
        arr:a.use_state_t<t>[],
        func_event:(e:t)=>void,
        input:t[]
    ){
    arr.map((item, index)=>{
        item.setss(input[index])
        func_event(input[index])
    })
}

export function func_push_arr<t>(
    input:t,
    arr:a.use_state_t<t[]>
){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR.push(input)
    arr.setss(UPDATE_ARR)
}

export function func_delete_item<t>(index:number,arr:a.use_state_t<t[]>){
    const UPDATE_ARR = [...arr.ss]
    UPDATE_ARR.splice(index, 1)
    arr.setss(UPDATE_ARR)
}

export function func_update_item_attr<
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

export function func_update_item_attrs<
    t extends object,
    k extends keyof t,
    v extends t[k]>(
        this_item:number,
        arr:a.use_state_t<t[]>,
        attrs:k[],
        input:v[]
    ){
        attrs.map((item, index)=>{
            func_update_item_attr(
                this_item,
                arr,
                item,
                input[index]
            )
        })
    }