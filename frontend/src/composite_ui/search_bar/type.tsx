type search_bar_t<type extends {title:string}> = {
    title:string|undefined,
    arr:type[],
    reading_arr:React.Dispatch<
    React.SetStateAction<type[]>
>
}

export default search_bar_t