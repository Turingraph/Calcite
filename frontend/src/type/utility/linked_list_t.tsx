type l_list_t<type> = {
    value:type,
    prev?:undefined|l_list_t<type>,
    next?:undefined|l_list_t<type>,
};

type linked_list_t<type> = {
    components:l_list_t<type>,
    length:number
}

export default linked_list_t;