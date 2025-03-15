import * as a from "../type/alias"

/*
av = attr_value
nv = name_value
*/

export function arr_to_value<t>(input:(a.attr_value<t>|a.name_value<t>)[]){
    return input.map((item)=>{
        return item.value
    })
}

export function avarr_to_index<t>(arr:a.attr_value<t>[], attr:string){
    for(let i = 0; i < arr.length; i++){
        if (attr === arr[i].attr){
            return i
        }
    }
    return undefined
}

export function nvarr_to_index<t extends a.name_value<t>[]>(arr:t, name:a.name|string){
    for(let i = 0; i < arr.length; i++){
        if (name === arr[i].name){
            return i
        }
    }
    return undefined
}


export function avarr_to_str<t>(input:a.attr_value<t>[]){
    return input.map((item)=>{
        return item.attr
    })
}

export function nvarr_to_str<t>(input:a.name_value<t>[]){
    return input.map((item)=>{
        return item.name
    })
}

export function value_to_varr<t>(value:t|undefined, arr:(a.attr_value<t>|a.name_value<t>)[]){
    if(value === undefined){
        return undefined
    }
    for(let i = 0; i < arr.length; i++){
        if (value === arr[i].value){
            return arr[i]
        }
    }
    return undefined
}

export function str_to_avarr<t>(name:string, arr:a.attr_value<t>[]){
    let i = 0
    while(i < arr.length){
        if(name === arr[i].attr){
            return arr[i]
        }
        i++
    }
    return undefined
}

export function str_to_nvarr<t>(name:string, arr:a.name_value<t>[]){
    let i = 0
    while(i < arr.length){
        if(name === arr[i].name){
            return arr[i]
        }
        i++
    }
    return undefined
}

export function nvarr_to_avarr<t>(arr:a.name_value<t>[]){
    return arr.map((item)=>{
        return {
            attr:item.name as a.attr,
            value:item.value
        } as a.attr_value<t>
    })
}

export function avarr_to_nvarr<t>(arr:a.attr_value<t>[]){
    return arr.map((item)=>{
        return {
            name:item.attr as a.name,
            value:item.value
        } as a.name_value<t>
    })
}
