type state_button_type<type extends object>={
    title:string,
    update_value:type,
    update_func:React.Dispatch<React.SetStateAction<type>>
}

export default state_button_type;