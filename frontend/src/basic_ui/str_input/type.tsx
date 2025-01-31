//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type str_input_type = {
    title?:string|undefined,
    ss_input:string,
    setss_input:React.Dispatch<
        React.SetStateAction<string>
    >
}

export default str_input_type;