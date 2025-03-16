import * as a from "../type/alias"

export function unique_arr<t>(arr:t[], unique:undefined|boolean = undefined){
    // https://www.geeksforgeeks.org/
    // how-to-convert-array-of-objects-into-unique-array-of-objects-in-javascript/
    if(unique === true){
        return arr.filter(
            (value, index, self) => self.findIndex((obj) =>
                JSON.stringify(obj) === JSON.stringify(value)) === index
        );
    }
    return arr
}

//-------------------------------------------------------------------------

// TYPE : "SORT"

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
            console.log("The sort is invalid.")
            console.log("The sort should be \"SORT\"|\"REVERSE\"|\"NO_SORT\"")
            console.log("Warning from frontend/ src/ src/ hook/ func_arrobj.tsx/ function sort_arr")
            console.log("--------------------------------------------------------------------")
            return arr
        }
    }
}


export function sort_arrobj<t extends object[], k extends keyof t[number]>(
    arr:t,
    sort_mode:undefined|"NO_SORT"|"SORT"|"REVERSE",
    sort_attr:undefined|k
){
    // https://stackoverflow.com/questions/21687907/
    // typescript-sorting-an-array

    // https://stackoverflow.com/questions/26871106/
    // check-if-all-elements-in-array-are-strings

    if(sort_attr === undefined || sort_mode === undefined){
        return arr
    }
    switch(sort_mode){
        case "SORT":{
            return arr.sort((n0, n1) => (n0 as t[number])[sort_attr] < (n1 as t[number])[sort_attr] ? -1 : 1)
        }
        case "REVERSE":{
            return arr.sort((n0, n1) => (n0 as t[number])[sort_attr] > (n1 as t[number])[sort_attr] ? -1 : 1)
        }
        case "NO_SORT":{
            return arr
        }
        default:{
            console.log("--------------------------------------------------------------------")
            console.log("The sort_mode is invalid.")
            console.log("The sort_mode should be \"SORT\"|\"REVERSE\"|\"NO_SORT\"")
            console.log("Warning from frontend/ src/ src/ hook/ func_arrobj.tsx/ function sort_arrobj")
            console.log("--------------------------------------------------------------------")
            return arr
        }
        }
    }

//-------------------------------------------------------------------------

// TYPE : "EDIT_ITEM"

export function edit_item<t>(
    arr:t[],
    index:number,
    input:t
){
const UPDATE_ARR = [...arr]
if(index >= 0 && index < UPDATE_ARR.length){
    UPDATE_ARR[index] = input
}
return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "EDIT_ATTR"

export function edit_attr<
    t extends object[], 
    k extends keyof t[number],
    o extends t[number][k]>(
        arr:t,
        index:number,
        input:o,
        attr:k,
    ){
    const UPDATE_ARR = [...arr]
    // console.log("index",index)
    // console.log("UPDATE_ARR.length",UPDATE_ARR.length)
    if(index >= 0 && index < UPDATE_ARR.length){
        (UPDATE_ARR[index] as t[number])[attr] = input
    }
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "PUSH"

export function push_arr<t>(
    arr:t[],
    input:t,
){
    const UPDATE_ARR = [...arr]
    UPDATE_ARR.push(input)
    return UPDATE_ARR
}

//-------------------------------------------------------------------------

// TYPE : "DELETE"

export function delete_item<t>(arr:t[], index:number){
    if(index >= 0 && index <= arr.length){
        const UPDATE_ARR = [...arr]
        UPDATE_ARR.splice(index, 1)
        return UPDATE_ARR
    }
    return arr
}

//-------------------------------------------------------------------------

// TYPE : COPY

export function copy_unique_item<
    t extends {name:a.name}[]>(
    arr:t,
    index:number,
){
    if(index >= 0 && index < arr.length){
        const UPDATE_ARR = [...arr]
        const NEW_OBJ:t[number] = JSON.parse(JSON.stringify(UPDATE_ARR[index]))
        const IS_DOT = NEW_OBJ.name.includes(".")
        const NAME = NEW_OBJ.name.split(".")
        const NEW_NAME = NAME[0] + "_clone" + (IS_DOT ? "." : "") + NAME.slice(1, NAME.length)
        NEW_OBJ.name = NEW_NAME as a.name
        UPDATE_ARR.splice(index + 1, 0, NEW_OBJ)
        return UPDATE_ARR
    }
    return arr
}
