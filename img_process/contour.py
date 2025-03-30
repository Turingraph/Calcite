import cv2
import numpy as np
from img_process.utility import get_ksize
from img_process.warning import warn_sort_contours
from utility.utility import get_options
from img_process.threshold import threshold
from img_process.utility import get_rgb, check_img, set_px

#-----------------------------------------------------------------------------------------

'''
What is contour in image processing ?

Contours can be explained simply as a curve joining all the continuous points 
(along the boundary), having same color or intensity. The contours are a useful tool for 
dealing with image with columns of text e.g. bill, table of contents page etc. in the 
context of OCR.

Reference
-   https://youtu.be/9FCw1xo_s0I?si=nkbaYLAZCLCSGUe5
-   https://docs.opencv.org/3.4/d4/d73/tutorial_py_contours_begin.html
'''

#-----------------------------------------------------------------------------------------

# Get the array of rectangles that indicate the boundary of text in img image.
# It is recommended to transform the input image using contour_img before use this function.
def get_contours(img: np.ndarray) -> list:
    contours, hierarchy = cv2.findContours(
        image=img, 
        mode=cv2.RETR_LIST, 
        method=cv2.CHAIN_APPROX_SIMPLE
    )
    output = []
    for i in contours:
        output.append(cv2.boundingRect(i))
    return output

#-----------------------------------------------------------------------------------------

# Blur the image for getting the format of the text
def contour_img(
    img: np.ndarray,
    thresh_px: int = 0,
    kernel: np.ndarray = np.ones(shape=(2, 30)),
    ksize: int = 9,
) -> np.ndarray:
    # 1. Blur the image.
    ksize = get_ksize(n=ksize)
    img = cv2.GaussianBlur(src=img, ksize=(ksize, ksize), sigmaX=0)
    # 2. Make the clear distinction between background and text in output image.
    transformation = threshold(
        method=cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU, 
        thresh_px=thresh_px,
        maxval=255)
    img=transformation.edit(img=img)
    # 3. Increase line width.
    img = cv2.dilate(src=img, kernel=kernel, iterations=1)
    return img

#-----------------------------------------------------------------------------------------

# Sort the get_contours(img) based on x, y, width, height and size, using this function.
'''
dilate_img = contour_img(img)
contours = get_contours(dilate_img)
sort_by_area = sort_contour(contours, 4)
'''
def sort_contours(
    contour: list | tuple, reverse: bool = False, method: int = 4
) -> list:
    method = get_options(
        input=method, 
        input_options=[4, 0, 1, 2, 3], 
        message=warn_sort_contours()
    )
    if method in [0, 1, 2, 3]:
        return sorted(
            contour,
            key=lambda x: x[method],
            reverse=reverse,
        )
    return sorted(
        contour,
        key=lambda x: (x[2]-x[0])*(x[3]-x[1]),
        reverse=reverse,
    )

#-----------------------------------------------------------------------------------------

# draw a rectangle in the img image.
# This function can also draw rectangle based on contour like this
# Note that : rgb == None means no color.
'''
dilate_img = contour_img(img)
contours = get_contours(dilate_img)
x, y, w, h = cv2.boundingRect(contours[0])
draw_img = rectangle(img=img, rgb=rgb,x=x, y=y, w=w, h=h)
'''
def rectangle(img:np.ndarray, rgb:list[int]|tuple[int]|int|None, x:int, y:int, h:int, w:int) -> np.ndarray:
    if rgb != None:
        img = check_img(img=img)
        if img.shape == 2:
            if isinstance(rgb, int):
                rgb = set_px(n=rgb)
            else:
                rgb = set_px(n=rgb[0])
        else:
            rgb = get_rgb(rgb)
        return cv2.rectangle(img=img, pt1=(x, y), pt2=(x+w, y+h), color=rgb, thickness=3)
    return img

def line(img:np.ndarray, rgb:list[int]|int|None, x_00:int, y_00:int, x_01:int, y_01:int):
    return cv2.line(img=img, pt1 = (x_00, y_00), pt2 = (x_01, y_01), color=rgb, thickness=3)

#-----------------------------------------------------------------------------------------

def get_box_area(b:list[int]):
    return (b[0] + b[2]) * (b[1] + b[3])
