
type config_type<type extends object> = {
    title:string[]|string,
    current_value:type,
    update_func:React.Dispatch<React.SetStateAction<type>>
}

export default config_type;