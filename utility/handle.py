
def get_options(input: any, input_options: tuple, message: str) -> any:
    if input not in input_options:
        print(message)
        return input_options[0]
    else:
        return input

def index_name(input:int):
    if input < 10:
        return "0"+str(input)
    return str(input)
