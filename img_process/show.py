import os

import cv2
import numpy as np
from PIL import Image

from img_process.warning import warn_save_img
from utility.utility import get_options


def show_img(img: np.ndarray, title: str = "img_out") -> None:
    # https://stackoverflow.com/questions/74546171/image-is-too-big-for-opencv-imshow-window-how-do-i-make-it-smaller
    # https://www.geeksforgeeks.org/python-opencv-resizewindow-function/
    cv2.namedWindow(winname=title, flags=cv2.WINDOW_NORMAL)
    cv2.resizeWindow(winname=title, width=500, height=600)
    cv2.imshow(winname=title, mat=img)
    cv2.waitKey(delay=0)
    cv2.destroyAllWindows()

def get_valid_img_path(path: list[str] | str = ["img", "img_out", "jpg"]):
    if isinstance(path, list):
        if len(path) == 0:
            return ["img", "img_out", "jpg"]
        elif len(path) == 1:
            return [path[0], "img_out", "jpg"]
        elif len(path) == 2:
            return [path[0], path[1], "jpg"]
        else:
            return [path[0], path[1], path[2]]
    elif isinstance(path, str):
        return ["img", path, "jpg"]
    else:
        return ["img", "img_out", "jpg"]

def save_img(
    img: np.ndarray,
    path: list[str] | str = ["img", "img_out", "jpg"],
) -> None:
    # https://stackoverflow.com/questions/902761/saving-a-numpy-array-as-an-image
    path = get_valid_img_path(path)
    format_options = (
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "tiff",
        "ppm",
        "ico",
        "psd"
    )
    if '.' == path[2][0]:
        path[2][0] = path[2][0][1:]
    path[2] = get_options(
        input=path[2], 
        input_options=format_options, 
        message=warn_save_img())
    if not os.path.exists(path=path[0]):
        os.makedirs(name=path[0])
    # https://docs.python.org/3/library/os.path.html
    path = os.path.join(path[0], path[1] + "." + path[2])
    # https://numpy.org/doc/2.1/reference/generated/numpy.save.html
    # https://stackoverflow.com/questions/62293077/
    # why-is-pils-image-fromarray-distorting-my-image-color
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    im = Image.fromarray(img)
    im.save(path)
