import state_button_type from "../../basic_ui/state_button/type";

type show_tab_type = {
    ss_select:number,
    setss_select:React.Dispatch<React.SetStateAction<number>>,
    title_array:string[],
    normal_rgb?:number|number[]|undefined,
    select_rgb?:number|number[]|undefined
}

export default show_tab_type;