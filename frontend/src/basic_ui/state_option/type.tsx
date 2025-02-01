//  https://stackoverflow.com/questions/40209352/
//  how-to-specify-optional-default-props-with-typescript-for-stateless-functiona

type state_option_t<t extends {title:string,id:number}> = {
    title?: string|undefined,
    options:t[],
    ss_option:number,
    setss_option:React.Dispatch<React.SetStateAction<number>>
}

export default state_option_t;