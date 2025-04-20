from utility.save import path_status

def file_to_liststr(path:str, separator:str|None = "\n"):
    if path_status(path) == 1:
        if separator == None:
            return [open(path,"r").read()]
        return open(path,"r").read().split(separator)
    return []
