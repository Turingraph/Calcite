import numpy as np
import cv2
from img_process.utility import set_px

"""
cv.medianBlur(	src, ksize[, dst]	) -> 	dst
cv.dilate(	src, kernel[, dst[, anchor[, iterations[, borderType[, borderValue]]]]]	) -> 	dst
//  destination array of the same size and type as src. 

Reference
*   https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga564869aa33e58769b4469101aac458f9
*   https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga4ff0f3318642c4f469d0e11f242f3b6c
"""

def remove_noise(img: np.ndarray) -> np.ndarray:
    # https://github.com/wjbmattingly/ocr_python_textbook/blob/main/02_02_working%20with%20opencv.ipynb
    # https://www.geeksforgeeks.org/erosion-and-dilation-morphological-transformations-in-opencv-in-cpp/
    kernel = np.ones(shape = (1, 1), dtype = np.uint8)
    img = cv2.dilate(src = img, kernel = kernel, iterations=1)
    img = cv2.erode(src = img, kernel = kernel, iterations=1)
    img = cv2.morphologyEx(src = img, kernel = kernel, borderType= cv2.MORPH_CLOSE)
    img = cv2.medianBlur(src = img,ksize = 3)
    return img

def thin_font(img: np.ndarray) -> np.ndarray:
    img = cv2.bitwise_not(src = img)
    kernel = np.ones(shape = (2, 2), dtype = np.uint8)
    img = cv2.erode(src = img, kernel = kernel, iterations=1)
    img = cv2.bitwise_not(src = img)
    return img

def thick_font(img: np.ndarray) -> np.ndarray:
    kernel = np.ones(shape = (2, 2), dtype = np.uint8)
    img = cv2.bitwise_not(src = img)
    img = cv2.dilate(src = img, kernel = kernel, iterations=1)
    img = cv2.bitwise_not(src = img)
    return img

def dilate(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.dilate(src = img, kernel = kernel, iterations=1)

def erode(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.erode(src = img, kernel = kernel, iterations=1)

def opening(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.morphologyEx(src = img, borderType= cv2.MORPH_OPEN, kernel = kernel)

def canny(img: np.ndarray, c1: int = 100, c2: int = 200) -> np.ndarray:
    if c1 > c2:
        tp = c1
        c1 = c2
        c2 = tp
    return cv2.Canny(src = img, threshold1= set_px(c1), threshold2= set_px(c2))

# https://nanonets.com/blog/ocr-with-tesseract/
