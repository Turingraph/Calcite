import React, {useState} from "react";
import Input_num from "../ui_01/input_num";
import * as a from "../../type/alias"
import Panel from "../ui_00/panel";
import Input_form, {input_form_str} from "../ui_01/input_form";

export default function Filter_kernel({
    //
}:{
    //
}){
    const [ss_first, setss_first] = useState<number>(1)
    const [ss_second, setss_second] = useState<number>(0)
    const [ss_last, setss_last] = useState<number>(0)
    const [ss_len, setss_len] = useState<number>(1)
    const [ss_scalar, setss_scalar] = useState<number>(1)
    return <>
        <Input_num
            opt_name={"first item" as a.opt_name}
            input={{ss:ss_first, setss:setss_first}}
            default_input={1}
        />
        <Input_num
            opt_name={"second item" as a.opt_name}
            input={{ss:ss_second, setss:setss_second}}
            default_input={1}
        />
        <Input_num
            opt_name={"last item" as a.opt_name}
            input={{ss:ss_last, setss:setss_last}}
            default_input={1}
        />
        <Input_num
            opt_name={"size of kernel" as a.opt_name}
            input={{ss:ss_len, setss:setss_len}}
            default_input={1}
        />
        <Input_num
            opt_name={"multiply by scalar" as a.opt_name}
            input={{ss:ss_scalar, setss:setss_scalar}}
            default_input={1}
        />
        
    </>
}