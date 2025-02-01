import option_t from "../../input/option_t";

//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type ss_option_t<t extends option_t> = {
    title?: string|undefined,
    options:t[],
    ss_option:number,
    setss_option:React.Dispatch<React.SetStateAction<number>>
}

export default ss_option_t;