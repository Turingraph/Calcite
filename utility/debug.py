from img_process_class.img_process_rgb import img_process_rgb
import numpy as np
import os

def are_2_imgs_same(
        img_00:img_process_rgb|np.ndarray|str, 
        img_01:img_process_rgb|np.ndarray|str):
    # https://stackoverflow.com/questions/10580676/
    # comparing-two-numpy-arrays-for-equality-element-wise
    img_00 = img_process_rgb(img=img_00).img
    img_01 = img_process_rgb(img=img_01).img
    if np.array_equal(img_00, img_01):
        return True
    return False

def are_2_imgs_same_shape(
        img_00:img_process_rgb|np.ndarray|str, 
        img_01:img_process_rgb|np.ndarray|str):
    # https://stackoverflow.com/questions/10580676/
    # comparing-two-numpy-arrays-for-equality-element-wise
    img_00 = img_process_rgb(img=img_00).img
    img_01 = img_process_rgb(img=img_01).img
    if img_00.shape[0] == img_01.shape[0] and img_00.shape[1] == img_01.shape[1]:
        return True
    return False

def are_2_img_paths_same(img_00:str, img_01:str):
    # https://stackoverflow.com/questions/34669068/
    # how-to-verify-that-two-images-are-exactly-identical
    if open(img_00,"rb").read() == open(img_01,"rb").read():
        return True
    return False

def are_2_text_files_same(path_00, path_01):
    # https://www.reddit.com/r/learnpython/comments/1g7tyhk/
    # is_this_python_code_good_for_comparing_two_files/
    if os.path.exists(path=path_00) and os.path.exists(path=path_01):
        with open(path_00, "r") as file_00:
            text_00 = file_00.read()
        with open(path_01, "r") as file_01:
            text_01 = file_01.read()
        if len(text_00) == len(text_01):
            for char_00, char_01 in zip(text_00, text_01):
                if char_00 != char_01:
                    return False
            return True
        return False
    return False
