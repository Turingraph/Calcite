def get_options(input: any, input_options: list, message: str) -> any:
    if input not in input_options:
        print(message)
        return input_options[0]
    else:
        return input