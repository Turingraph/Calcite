import * as a from "../type/alias"

export function numarr_to_strarr(numarr:number[], strarr:string[]){
    return numarr.map((item)=>{
        return strarr[item]
    })
}

export function item_to_index<t>(arr:t[],item:t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            return i
        }
    }
    return undefined
}

export function arr_to_opt<
    t extends {[x: string]: unknown}>
    (arr:(string|t)[]){
    return arr.map((item, index)=>{
        if(typeof item === "string"){
            return {
            attr:item as a.attr,
            value:index
            } as a.attr_value<number>
        }
        else if(typeof item.attr === "string"){
            if(typeof item.value === "number"){
                return {
                    attr:item.attr as a.attr,
                    value:item.value
                } as a.attr_value<number>
            }
            else{
                return {
                    attr:item.attr as a.attr,
                    value:index
                } as a.attr_value<number>
            }
        }
        else if(typeof item.name === "string"){
            if(typeof item.value === "number"){
                return {
                    attr:item.name as a.attr,
                    value:item.value
                } as a.attr_value<number>
            }
            else{
                return {
                    attr:item.name as a.attr,
                    value:index
                } as a.attr_value<number>
            }
        }
        else{
            return {
                attr:JSON.stringify(item),
                value:index
            } as a.attr_value<number>
        }
    })
}