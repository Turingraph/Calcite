import cv2
import numpy as np
import os
from PIL import Image
from utility.utility import get_options

def show(img: np.ndarray, title: str = "img_out") -> None:
    # https://stackoverflow.com/questions/74546171/image-is-too-big-for-opencv-imshow-window-how-do-i-make-it-smaller
    # https://www.geeksforgeeks.org/python-opencv-resizewindow-function/
    cv2.namedWindow(winname=title, flags=cv2.WINDOW_NORMAL)
    cv2.resizeWindow(winname=title, width=500, height=600)
    cv2.imshow(winname=title, mat=img)
    cv2.waitKey(delay=0)
    cv2.destroyAllWindows()

def save_img(
    img: np.ndarray,
    path: list[str] | str = ["img_out", "img_out", "jpg"],
) -> None:
    # https://stackoverflow.com/questions/902761/saving-a-numpy-array-as-an-image
    if isinstance(path, list):
        if len(path) == 0:
            path = ["img_out", "img_out", "jpg"]
        if len(path) == 1:
            path = [path[0], "img_out", "jpg"]
        if len(path) == 2:
            path = [path[0], path[1], "jpg"]
    if isinstance(path, str):
        path = [path, "img_out", "jpg"]

    format_options = [
        "jpg",
        "jpeg",
        "png",
        "gif",
        "bmp",
        "tiff",
        "ppm",
        "ico",
        "psd"
    ]
    if '.' == path[2][0]:
        path[2][0] = path[2][0][1:]
    message = """
-------------------------------------------------------------------------------------------
img_process/show.py/def save

def save(
    img: np.ndarray,
    path: list[str] | str = ["img_out", "img_out", "jpg"],
) -> None:
# This function save the image
Note that
-   path[0] = folder_name
-   path[1] = file_name
-   path[2] = file_format

available file_format options
-   jpeg
-   png
-   gif
-   bmp
-   tiff
-   ppm
-   ico
-   psd
-------------------------------------------------------------------------------------------
"""
    path[2] = get_options(input=path[2], input_options=format_options, message=message)
    if not os.path.exists(path=path[0]):
        os.makedirs(name=path[0])
    # https://docs.python.org/3/library/os.path.html
    path = os.path.join(path[0], path[1] + "." + path[2])
    # https://numpy.org/doc/2.1/reference/generated/numpy.save.html
    im = Image.fromarray(img)
    im.save(path)
