import os

import cv2
import numpy as np
from PIL import Image
from pathlib import Path

from img_process.warning import warn_save_img
from utility.utility import get_valid_path


def show_img(img: np.ndarray, title: str = "img_out") -> None:
    # https://stackoverflow.com/questions/74546171/image-is-too-big-for-opencv-imshow-window-how-do-i-make-it-smaller
    # https://www.geeksforgeeks.org/python-opencv-resizewindow-function/
    cv2.namedWindow(winname=title, flags=cv2.WINDOW_NORMAL)
    cv2.resizeWindow(winname=title, width=500, height=600)
    cv2.imshow(winname=title, mat=img)
    cv2.waitKey(delay=0)
    cv2.destroyAllWindows()

def save_img(
    img: np.ndarray,
    path:str|None,
    absolute:bool = False
) -> None:
    format_options = ( 
        "jpg", "jpeg", "png",
        "gif", "bmp", "tiff",
        "ppm", "ico", "psd"
    )
    path = get_valid_path(
        path=path,
        format_options=format_options,
        absolute=absolute,
        warn_save=warn_save_img()
    )
    cv2.imwrite(path, img)
