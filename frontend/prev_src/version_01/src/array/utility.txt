//-------------------------------------------------------------------------

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

//-------------------------------------------------------------------------

export function get_obj_value<
    t extends object, 
    k extends keyof t>(
        input:t,
        attrs:k[]
    ){
    return attrs.map((item)=>{return input[item]})
}
