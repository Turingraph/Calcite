import os

def save_text(
    text:str,
    path: list[str] | str = ["str_out", "str_out", "txt"],
)-> None:
    if isinstance(path, list):
        if len(path) == 0:
            path = ["str_out", "str_out", "txt"]
        if len(path) == 1:
            path = [path[0], "str_out", "txt"]
        if len(path) == 2:
            path = [path[0], path[1], "txt"]
    if isinstance(path, str):
        path = ["str_out", path, "txt"]
    # https://www.w3schools.com/python/python_file_write.asp
    # https://www.geeksforgeeks.org/python-check-if-a-file-or-directory-exists/
    if not os.path.exists(path=path[0]):
        os.makedirs(name=path[0])
    path = os.path.join(path[0], path[1] + "." + path[2])
    file = open(file=path, mode="w")
    file.write(text)
    file.close()
