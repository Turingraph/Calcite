import React from "react";
import { CHARACTERS } from "../../test/constant";

/*
`forEach` is used for loop the array without returning the data.

Note that I use `const`, because the actual value of ARR (which is pointer)
is not updated, the only things that is updated is &(ARR + i).
You can learn more about this by study pointer in C.
*/

function FOREACH_00<t>(){
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

function MAP_00<t>(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    ARR.map((item)=>{
        item.age += 1
    })
    console.log("after",ARR)
}

// WRONG

function MAP_01<t>(){
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

function MAP_02<t>(){
    const ARR = CHARACTERS
    console.log("before",ARR)
    const AFTER = ARR.map((item)=>{
        item.age += 1
        return item
    })
    console.log("after",AFTER)
}

// CORRECT

function MAP_03<t>(){
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
