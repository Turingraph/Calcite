import os
from pathlib import Path

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

def get_valid_path(
    path:str,
    absolute:bool = False,
    format_options:list[str]|None = None,
    warn_save:str = ""):
    # https://stackoverflow.com/questions/41586429/
    # opencv-saving-images-to-a-particular-folder-of-choice
    # https://stackoverflow.com/questions/27844088/
    # python-get-directory-two-levels-up
    name = path.split("/")[-1]
    second = ""
    if len(name.split(".")) >= 2:
        second = name.split(".")[1]
    if format_options != None:
        second = get_options(
            input = second,
            input_options=format_options,
            message=warn_save)
    if second != "":
        name = name.split(".")[0] + "." + second
    path = path.split("/")[:-1]
    if absolute == True:
        path = os.path.join(path)
        if not os.path.exists(path=path):
            os.makedirs(name=path)
        return os.path.join(path, name)
    else:
        i = 0
        while path[i] in [".", "..", "..."]:
            i += 1
        if i < len(Path(__file__).parents):
            path = os.path.join(
                Path(__file__).parents[i], 
                os.path.join(path[i:])
            )
            if not os.path.exists(path=path):
                os.makedirs(name=path)
            return path
        else:
            ValueError("Path is invalid.")

def get_valid_ith_path(
    path:str,
    index:int,
    absolute:bool = False,
    format_options:list[str]|None = None,
    warn_save:str = ""
):
    name = path.split("/")[-1]
    path = os.path.join(path.split("/")[:-1])
    file_format = ""
    if len(name.split(".")) >= 2:
        file_format = "." + name.split(".")[1]
    name = name.split(".")[0] + "_" + index_name(index) + file_format
    return get_valid_path(
        path = os.path.join(path, name),
        absolute=absolute,
        format_options=format_options,
        warn_save=warn_save
    )
