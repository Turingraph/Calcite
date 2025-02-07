// https://stackoverflow.com/questions/41790393
// /typescript-strict-alias-checking

export type nominal<t> = t & { readonly '': unique symbol };
export type name  = nominal<string>
export type opt_name  = undefined|name // optional name
export type logo = name|img|undefined   // logo of button
// export type arr<t> = nominal<t[]> // array
export type value<t> = nominal<t>
export type select = nominal<boolean>
export type img = nominal<File> // image
export type history<t> = {
    arr:t[],
    commit:string[]
    current:number
}
export type func_event = nominal<()=>void>
export type func_convert<t_input, t_output> = nominal<(value:t_input)=>t_output>
export type handle_event<input_mode> = nominal<
    (e:React.ChangeEvent<input_mode>)=>void
>

export type name_t = {
    name:name
}

export type opt_name_t = {
    opt_name:opt_name
}

// https://stackoverflow.com/questions/42055039
// /typescript-make-variable-act-as-pointer-to-another-variable

export type value_t<t> = {
    value:t
}

export type use_state_t<t> = {
    ss:t,
    setss:React.Dispatch<
        React.SetStateAction<t>
    >
}

// https://stackoverflow.com/questions/49752151/
// typescript-keyof-returning-specific-type

export type key_of_t<t, v> = keyof {
    [p in keyof t as t[p] extends v? p: never]: any
}
