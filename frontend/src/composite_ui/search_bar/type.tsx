type search_bar_type<type extends {title:string}> = {
    title:string|undefined,
    array:type[],
    reading_array:React.Dispatch<
    React.SetStateAction<type[]>
>
}

export default search_bar_type