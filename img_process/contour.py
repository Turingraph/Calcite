import cv2
import numpy as np
from img_process.utility import u_odd
from utility.utility import get_options
from img_process.threshold import threshold

def get_contours(img: np.ndarray) -> tuple:
    contours, hierarchy = cv2.findContours(
        image=img, 
        mode=cv2.RETR_LIST, 
        method=cv2.CHAIN_APPROX_SIMPLE
    )
    return contours

def contour_img(
    img: np.ndarray,
    thresh_px: int = 0,
    kernel: np.ndarray = np.ones(shape=(2, 30)),
    ksize: int = 9,
) -> np.ndarray:
    ksize = u_odd(n=ksize)
    img = cv2.GaussianBlur(src=img, ksize=(ksize, ksize), sigmaX=0)
    transformation = threshold(
        method=cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU, 
        thresh_px=thresh_px,
        maxval=255)
    img=transformation.edit(img=img)
    img = cv2.dilate(src=img, kernel=kernel, iterations=1)
    return img


def sort_contours(
    contour: list | tuple, reverse: bool = False, method: int = 4
) -> list:
    message = """
-------------------------------------------------------------------------------------------
img_process/contour.py/def sort_contours

def sort_contours(
    contour: list | tuple, 
    reverse: bool = False, 
    method: int = 4
) -> list:
# This function sort the `contour` list or tuple, based on `method` option.

available `method` options
-   0 = x
-   1 = y
-   2 = width
-   3 = height
-   4 = size
-------------------------------------------------------------------------------------------
    """
    method = get_options(
        input=method, input_options=[4, 0, 1, 2, 3], message=message
    )
    if method in [0, 1, 2, 3]:
        return sorted(
            contour,
            key=lambda x: cv2.boundingRect(array=x)[method],
            reverse=reverse,
        )
    return sorted(
        contour,
        key=lambda x: cv2.contourArea(contour=x),
        reverse=reverse,
    )
