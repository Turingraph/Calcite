from img_process_class.img_process_rgb import img_process_rgb
import numpy as np

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
