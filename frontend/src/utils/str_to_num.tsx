import * as a from "../../src/type/alias"

// https://stackoverflow.com/questions/1779013
// /check-if-string-contains-only-digits

export default function Str_to_num({value}:a.value_t<string>){
    const REGEXP = /[a-zA-Z]/g;
    if (/^\d+$/.test(value) == false){
        // console.log("Warning: Input should contains only number.")
        return 0;
    }
    return Number(value)
}
