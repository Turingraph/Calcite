//------------------------------------------------------------------------------------

// TITLE : BASIC ALIAS TYPE

// https://stackoverflow.com/questions/41790393
// /typescript-strict-alias-checking

export type nominal<t> = t & { readonly '': unique symbol };

/*
Note that
1.  name should always be sorted in alphabet order.
2.  both attr and name should be unique among the array where it belong to.
*/

export type name  = nominal<string>
export type attr  = nominal<string>
export type opt_name  = undefined|name // optional name
export type img = nominal<string>// <File> // image

//------------------------------------------------------------------------------------

// TITLE : KEY-VALUE PAIR TYPE

export type attr_value<t> = {
    attr:attr,
    value:t
}

// name_valueis identical to attr_value, except it make sure that
// by default, the act_namearr will sort the name_value[] in alphabet order.

export type name_value<t> = {
    name:name,
    value:t
}

//------------------------------------------------------------------------------------

// TITLE : FUNCTION BASED TYPE

// https://stackoverflow.com/questions/67367665/
// type-promisevoid-is-not-assignable-to-type-mouseeventhandlerhtmlbuttonelem

export type func_event = nominal<()=>(void|Promise<void>)>
export type handle_event<input_mode> = nominal<
    (e:React.ChangeEvent<input_mode>)=>void
>

export type setss_t<t> = React.Dispatch<
    React.SetStateAction<t>
    >|((e:t)=>void)

export type use_state_t<t> = {
    ss:t,
    setss:React.Dispatch<
        React.SetStateAction<t>
    >|((e:t)=>void)
}
