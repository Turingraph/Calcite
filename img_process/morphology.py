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

#-----------------------------------------------------------------------------------------

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

#-----------------------------------------------------------------------------------------

# Increase the line width of the image
def dilate(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.dilate(src = img, kernel = kernel, iterations=1)

#-----------------------------------------------------------------------------------------

# Decrease the line width of the image
def erode(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.erode(src = img, kernel = kernel, iterations=1)

#-----------------------------------------------------------------------------------------

# erosion followed by dilation
def opening(img: np.ndarray, kernel: np.ndarray = np.ones((5, 5), np.uint8)) -> np.ndarray:
    return cv2.morphologyEx(src = img, borderType= cv2.MORPH_OPEN, kernel = kernel)

#-----------------------------------------------------------------------------------------

"""
This algorithm works by 
1.  It is recommended to transform image to gray image and apply Gaussian Blur.
2.  approximate the derivative of image pixal (Gx and Gy).
-   using horizontal and vertical kernal to find Gx and Gy
-   G_d = square_root(Gx^2 + Gy^2) = how large the gradient
-   Theta = arctan(Gy / Gx) = orientation of gradient
3.  Use G_d and Theta to find local maximum pixel, and make other pixel equal 0.
4.  Select only pixel that higher than high_thresh or connected 
    to the selected pixel and higher than low_thresh.

Reference
-   https://youtu.be/uihBwtPIBxM?si=eX2jBPZZLiu8A87y
-   https://youtu.be/sRFM5IEqR2w?si=PqnIy0Abml61lZQx    
"""
def canny(img: np.ndarray, low_thresh: int = 100, high_thresh: int = 200) -> np.ndarray:
    if low_thresh > high_thresh:
        tp = low_thresh
        low_thresh = high_thresh
        high_thresh = tp
    return cv2.Canny(image = img, threshold1= set_px(low_thresh), threshold2= set_px(high_thresh))

#-----------------------------------------------------------------------------------------

# https://nanonets.com/blog/ocr-with-tesseract/
# https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html
