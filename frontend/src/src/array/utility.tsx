//-------------------------------------------------------------------------

// TYPE : "SORT" for act_arr.tsx

export function sort_arr<t>(
    arr:t[],
    sort:"NO_SORT"|"SORT"|"REVERSE"|undefined
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings

    if(sort === undefined){
        return arr
    }
    switch(sort){
        case "SORT":{
            return arr.sort((n0, n1) => n0 < n1 ? -1 : 1)
        }
        case "REVERSE":{
            return arr.sort((n0, n1) => n0 > n1 ? -1 : 1)
        }
        case "NO_SORT":{
            return arr
        }
        default:{
            console.log("--------------------------------------------------------------------")
            console.log("The sort of sort_arr is invalid.")
            console.log("The sort should be \"SORT\"|\"REVERSE\"|\"NO_SORT\"")
            console.log("Warning from frontend/ src/ src/ hook/ funcObjArr.tsx/ function sort_arr")
            console.log("--------------------------------------------------------------------")
            return arr
        }
        }
    }

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
