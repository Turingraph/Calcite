type state_button_type<type>={
    title:string,
    ss_effect:type,
    setss_effect:React.Dispatch<React.SetStateAction<type>>,
    rgb?:number|number[]|undefined
}

export default state_button_type;