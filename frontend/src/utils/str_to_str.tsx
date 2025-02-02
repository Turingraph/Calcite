import * as a from "../../src/type/alias"

export default function Str_to_str({value}:a.value_t<string>){
    if (value == undefined){
        return ""
    }
    return value
}