import cv2
import numpy as np

from img_process.warning import warn_valid_img

# Make the black area of the image become white and vice versa
def invert_img(img: np.ndarray) -> np.ndarray:
    return cv2.bitwise_not(src=img)

def get_ksize(n: int) -> int:
    n = int(n)
    if n < 3:
        return 3
    else:
        if n % 2 == 1:
            return n
        else:
            return n + 1

def set_px(n: int) -> int:
    if n < 0:
        return 0
    elif n > 255:
        return 255
    else:
        return n

def get_size(
    size: int | None, maxval: int, default_size: int = 0
) -> int:
    if type(size) == int:
        if size < 0:
            return 0
        elif size > maxval:
            return maxval
        else:
            return size
    else:
        return default_size

def gray_img(img: np.ndarray) -> np.ndarray:
    if len(img.shape) == 3:
        return cv2.cvtColor(src=img, code=cv2.COLOR_RGB2GRAY)
    elif len(img.shape) == 2:
        return np.copy(img)
    else:
        raise ValueError(warn_valid_img())

def rgb_img(img: np.ndarray) -> np.ndarray:
    if len(img.shape) == 3:
        return np.copy(img)
    elif len(img.shape) == 2:
        return cv2.cvtColor(src=img, code=cv2.COLOR_GRAY2RGB)
    else:
        raise ValueError(warn_valid_img())

def check_img(img: np.ndarray) -> np.ndarray:
    if len(img.shape) in [2,3]:
        return img
    else:
        raise ValueError(warn_valid_img())

def get_rgb(rgb:list[int]|int) -> list[int]:
    if isinstance(rgb, int):
        return [0, 0, set_px(rgb)]
    else:
        if len(rgb) == 0:
            return [0, 0, 255]
        elif len(rgb) == 1:
            return [0, 0, set_px(rgb[0])]
        elif len(rgb) == 2:
            return [0, set_px(rgb[1]), set_px(rgb[0])]
        else:
            return [set_px(rgb[2]), set_px(rgb[1]), set_px(rgb[0])]

"""
Reference
1. Tesseract OCR Tutorial
* https://nanonets.com/blog/ocr-with-tesseract/
2. How to Open an Image in Python with PIL
* https://youtu.be/UxYJxcdLrs0?si=biuELY46TWTwhqvX

"""
