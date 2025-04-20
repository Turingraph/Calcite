import os
from pathlib import Path

from utility.handle import get_options, index_name


def get_relative_folder(path:str):
    i = 0
    while_loop = True
    parent = []
    while i < len(path) and while_loop == True:
        if path[i] not in [".", "..", "..."]:
            while_loop = False
        else:
            parent.append(os.pardir)
            i += 1
    if i < len(Path(__file__).parents):
        if len(path) >= 1:
            return os.path.join(
                os.path.abspath(os.path.join(os.getcwd(), *parent)),
                os.path.join(*path[i:])
            )
        return None
    else:
        ValueError("Path is invalid.")

def handle_valid_file_format(
    name:str,
    format_options:list[str]|None = None,
    warn_save:str = ""
    ):
    second = ""
    if len(name.split(".")) >= 2:
        second = name.split(".")[1]
    if format_options != None:
        second = get_options(
            input = second,
            input_options=format_options,
            message=warn_save)
    if second != "":
        return name.split(".")[0] + "." + second
    return name.split(".")[0]

def get_valid_path(
    path:str,
    abs_path:bool = False,
    # format_options and warn_save are used for forcing user to open and save image file 
    # in valid format but we don't sure what files that PIL library support.
    format_options:list[str]|None = None,
    warn_save:str = ""):
    # https://stackoverflow.com/questions/41586429/
    # opencv-saving-images-to-a-particular-folder-of-choice
    # https://stackoverflow.com/questions/27844088/
    # python-get-directory-two-levels-up
    # https://stackoverflow.com/questions/14826888/
    # python-os-path-join-on-a-list
    name = handle_valid_file_format(
        name=path.split("/")[-1],
        format_options=format_options,
        warn_save=warn_save)
    path = path.split("/")[:-1]
    if abs_path == True:
        path = os.path.join(*path)
        return os.path.join("/",path, name)
    else:
        path = get_relative_folder(path)
        if path != None:
            return os.path.join(
                path, 
                name
            )
        return name

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

def create_dir(path:str):
    parent = os.path.join("/",*path.split("/")[:-1])
    if not os.path.exists(path=parent):
        os.makedirs(name=parent)

def create_text_dir(path:str):
    create_dir(path = path)
    if os.path.isfile(os.path.join("/", *(path.split("/")))) == False:
        open(file=path, mode="x")

def path_status(path:str, print_text:bool=False):
    """
    -1== not exists
    0 == folder
    1 == file
    """
    text = ""
    status = 0
    if os.path.exists(path=path):
        text = path + "IS EXISTS"
        if os.path.isfile(path) == True:
            text += " AS A FILE."
            status = 1
        else:
            text += " AS A FOLDER."
            status = 0
    else:
        text = path + "IS NOT EXISTS."
        status = -1
    if print_text == True:
        print(status,text)
    return status
