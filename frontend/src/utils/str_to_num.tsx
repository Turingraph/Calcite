import input_t from "../types/basic/input_t";

// https://stackoverflow.com/questions/1779013
// /check-if-string-contains-only-digits

export default function Str_to_num({input}:input_t<string>){
    const REGEXP = /[a-zA-Z]/g;
    if (/^\d+$/.test(input) == false){
        // console.log("Warning: Input should contains only number.")
        return 0;
    }
    return Number(input)
}