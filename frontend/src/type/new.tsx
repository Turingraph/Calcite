import { input_uit } from "./input_ui"
import * as a from "./alias"

type ok_button = {
    name?:a.name,
    arr:input_uit<string|number>[],
    texts:a.use_state_t<string[]>,
    index:number,
    input:string|number,
    func_event?:a.func_event
}