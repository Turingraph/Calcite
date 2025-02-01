import title_t from "../../basic/title_t"

type search_bar_t<t extends title_t> = {
    title?:string|undefined,
    arr:t[],
    reading_arr:React.Dispatch<
    React.SetStateAction<t[]>
>
}

export default search_bar_t
