//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type ss_str_input_t = {
    title?:string|undefined,
    ss_input:string,
    setss_input:React.Dispatch<
        React.SetStateAction<string>
    >
}

export default ss_str_input_t;