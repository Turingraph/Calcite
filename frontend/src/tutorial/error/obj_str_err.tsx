import React, {useState} from "react"
import * as a from "../../type/alias"

export default function Obj_str_err<t>({
    arr
}:{
    arr:t[]
}){
    const [ss_texts, setss_texts] = useState<string>("")
    return <>
    {JSON.stringify(arr[0])}
    </>
}