import { CHARACTERS } from "../../test/ui/data";

/*
`forEach` is used for loop the array without returning the data.

Note that I use `const`, because the actual value of ARR (which is pointer)
is not updated, the only things that is updated is &(ARR + i).
You can learn more about this by study pointer in C.
*/

export function FOREACH_00(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    ARR.forEach((item)=>{
        item.age += 1
    })
    console.log("after",ARR)
}

/*
`map` is used for creating the array based on the input array, thus it require `return`

Reference
*   https://stackoverflow.com/questions/45014094/
    how-do-i-fix-expected-to-return-a-value-at-the-end-of-arrow-function-warning
*/

// WRONG

export function MAP_00(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    ARR.map((item)=>{
        item.age += 1
    })
    console.log("after",ARR)
}

// WRONG

export function MAP_01(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    const AFTER = ARR.map((item)=>{
        if(item.age < 18){
            item.age += 1
            return item
        }
    })
    console.log("after",AFTER)
}

// CORRECT

export function MAP_02(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    const AFTER = ARR.map((item)=>{
        item.age += 1
        return item
    })
    console.log("after",AFTER)
}

// CORRECT

export function MAP_03(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    const AFTER = ARR.map((item)=>{
        if(item.age < 18){
            item.age += 1
            return item
        }
        return undefined
    })
    console.log("after",AFTER)
}
