import option_t from "../input/option_t"
import num_input_t from "../input/num_input_t"
import str_input_t from "../input/str_input"

type setting_ocr_t = {
    psm: option_t,
    languages:option_t[],
    oem:option_t,
    timeout:num_input_t,
    white_or_black_list:option_t,
    search_characters:str_input_t
}

export default setting_ocr_t