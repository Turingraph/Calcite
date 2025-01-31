type state_option_type = {
    title: string|null,
    option:{key:string, value:number}[],
    ss_option:number,
    setss_option:React.Dispatch<React.SetStateAction<number>>
}

export default state_option_type;