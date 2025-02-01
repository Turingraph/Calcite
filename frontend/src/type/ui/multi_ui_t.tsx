import num_input_t from "./num_input_t"
import option_t from "./option_t"

type multi_ui_t = {
    title?:undefined|string,
    num_input?:undefined|num_input_t|num_input_t[],
    option_title?:undefined|string,
    option_input?:undefined|option_t[]
}

export default multi_ui_t