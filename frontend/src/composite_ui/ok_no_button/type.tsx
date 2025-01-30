
type ok_no_button_type<type extends object> = {
    current_value:type,
    update_value:type,
    update_func:React.Dispatch<React.SetStateAction<type>>
}

export default ok_no_button_type;