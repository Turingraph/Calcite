import title_t from "../types/basic/title_t";

export default function Str_to_str({title}:title_t){
    if (title == undefined){
        return ""
    }
    return title
}