type ok_no_button_type<type>={
    ok_title?:string|undefined,
    no_title?:string|undefined,
    ok_ss_effect:type,
    no_ss_effect:type,
    setss_effect:React.Dispatch<
    React.SetStateAction<type>>,
}

export default ok_no_button_type;