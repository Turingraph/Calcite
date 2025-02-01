type use_state_t<t> = {
    ss_input:t,
    setss_input:React.Dispatch<
        React.SetStateAction<t>
    >
}

export default use_state_t