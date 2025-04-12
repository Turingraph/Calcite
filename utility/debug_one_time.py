import os

def get_cwd_parent():
    # https://www.kodeclik.com/get-parent-directory-python/
    return os.path.abspath(os.path.join(os.getcwd(), os.pardir))

def get_cwd():
    # return local path that import get_cwd() instead.
    return os.getcwd()

def get_file():
    # return /home/pc/Desktop/open_close_rider/utility/utility.py
    return os.path.abspath(__file__ )

def type_open_img(img:str):
    # <class '_io.BufferedReader'>
    print(type(open(img, "rb")))
