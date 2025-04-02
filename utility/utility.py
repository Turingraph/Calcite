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
    # https://stackoverflow.com/questions/14826888/
    # python-os-path-join-on-a-list
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
        path = os.path.join(*path)
        if not os.path.exists(path=path):
            os.makedirs(name=path)
        return os.path.join(path, name)
    else:
        i = 0
        parent = []
        while path[i] in [".", "..", "..."]:
            parent.append(os.pardir)
            i += 1
        if i < len(Path(__file__).parents):
            path = os.path.join(
                os.path.abspath(os.path.join(os.getcwd(), *parent)),
                os.path.join(*path[i:])
            )
            if not os.path.exists(path=path):
                os.makedirs(name=path)
            return os.path.join(path, name)
        else:
            ValueError("Path is invalid.")

def get_valid_ith_path(
    path:str,
    index:int,
):
    name = path.split("/")[-1]
    path = os.path.join(*path.split("/")[:-1])
    file_format = ""
    if len(name.split(".")) >= 2:
        file_format = "." + name.split(".")[1]
    name = name.split(".")[0] + "_" + index_name(index) + file_format
    return os.path.join(path, name)

def get_file():
    # return /home/pc/Desktop/open_close_rider/utility/utility.py
    return os.path.abspath(__file__ )

def get_cwd():
    # return local path that import get_cwd() instead.
    return os.getcwd()

def get_cwd_parent():
    # https://www.kodeclik.com/get-parent-directory-python/
    return os.path.abspath(os.path.join(os.getcwd(), os.pardir))
