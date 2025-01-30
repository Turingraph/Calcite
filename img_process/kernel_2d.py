import numpy as np
import cv2
from utility.utility import get_options

message = """
-------------------------------------------------------------------------------------------
img_process/kernel_2d.py/def kernel_2d

def kernel_2d(
    w: int,
    h: int | None = None,
    scalar: float = 1,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
# This function create `np.ndarray` kernel with `(w, h)` as it's `shape`, based on `mode` option

available `mode` options
-   cv2.MORPH_RECT      =   Rectangular Kernel
>>> cv2.getStructuringElement(cv2.MORPH_RECT,(5,5))
array([[1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1]], dtype=uint8)

-   cv2.MORPH_ELLIPSE   =   Elliptical Kernel
>>> cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(5,5))
array([[0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0]], dtype=uint8)

-   cv2.MORPH_CROSS     =   Cross Kernel
>>> cv2.getStructuringElement(cv2.MORPH_CROSS,(5,5))
array([[0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0],
       [1, 1, 1, 1, 1],
       [0, 0, 1, 0, 0],
       [0, 0, 1, 0, 0]], dtype=uint8)

Reference
*   https://opencv24-python-tutorials.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_morphological_ops/py_morphological_ops.html
-------------------------------------------------------------------------------------------
"""

input_options = [cv2.MORPH_RECT, cv2.MORPH_ELLIPSE, cv2.MORPH_CROSS]

def kernel_2d(
    w: int,
    h: int | None = None,
    scalar: float = 1,
    mode: int = cv2.MORPH_RECT,
) -> np.ndarray:
    mode = get_options(
        input = mode, 
        input_options = input_options, 
        message = message)
    if h == None:
        h = w
    return scalar * cv2.getStructuringElement(
        mode, 
        (w, h))

def sharp_kernel_2d(
    ls: list[float] = [-0.1, -5], center_px: None | float = None
) -> np.ndarray:
    # https://youtu.be/ku_xjw_b4_lz_sa?si=mt-le_kg_kjp_mn_j_gfg
    # https://www.geeksforgeeks.org/python-opencv-filter2d-function/
    # edge detection
    # time : o(n^2)
    # space: o(n^2)
    ksize = len(ls) * 2 + 1
    kernel = np.ones(shape = (ksize, ksize))
    for i in range(stop = len(ls)):
        j = ksize - i - 1
        kernel[i] = ls[i] * kernel[i]
        kernel[j] = ls[i] * kernel[j]
        for q in range(i):
            p = ksize - q - 1
            kernel[i][q] = ls[q]
            kernel[i][p] = ls[q]
            kernel[j][q] = ls[q]
            kernel[j][p] = ls[q]
    for i in range(stop = len(ls)):
        j = ksize - i - 1
        kernel[len(ls)][i] = ls[i]
        kernel[len(ls)][j] = ls[i]
    if not isinstance(center_px, (int, float)):
        center_coef = 1
        center_px = 0
        for i in range(stop = len(ls)):
            j = len(ls) - i - 1
            center_coef += 2
            center_px += (center_coef * 2 + (center_coef - 2) * 2) * ls[j]
        center_px *= -1
        center_px += 1
    kernel[len(ls)][len(ls)] = center_px
    return kernel
