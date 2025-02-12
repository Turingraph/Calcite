import { input_t } from "./input"
import * as a from "./alias"

type ok_button = {
    name?:a.name,
    arr:input_t<string|number>[],
    texts:a.use_state_t<string[]>,
    index:number,
    input:string|number,
    func_event?:a.func_event
}