import option_t from "../ui/option_t"
import num_input_t from "../ui/num_input_t"
import str_input_t from "../ui/str_input_t_t"

type setting_ocr_t = {
    psm: option_t,
    languages:option_t[],
    oem:option_t,
    timeout:num_input_t,
    white_or_black_list:option_t,
    search_characters:str_input_t
}

export default setting_ocr_t