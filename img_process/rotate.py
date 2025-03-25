from img_process.contour import contour_img
import numpy as np
import cv2
from img_process.warning import warn_sort_general_contours
from utility.utility import get_options

#-----------------------------------------------------------------------------------------

# Get the array of rectangles that indicate the boundary of text in img image.
# It is recommended to transform the input image using contour_img before use this function.
def get_general_contours(img: np.ndarray) -> tuple:
    contours, hierarchy = cv2.findContours(
        image=img, 
        mode=cv2.RETR_LIST, 
        method=cv2.CHAIN_APPROX_SIMPLE
    )
    return contours

#-----------------------------------------------------------------------------------------

def sort_general_contours(
    contour: list | tuple, reverse: bool = False, method: int = 4
) -> list:
    method = get_options(
        input=method, 
        input_options=[4, 0, 1, 2, 3], 
        message=warn_sort_general_contours()
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

#-----------------------------------------------------------------------------------------

def get_skew_angle(img: np.ndarray) -> int:
    # https://github.com/wjbmattingly/ocr_python_textbook/blob/main/02_02_working%20with%20opencv.ipynb
    # https://becominghuman.ai/how-to-automatically-deskew-straighten-a-text-image-using-opencv-a0c30aed83df

    #####################################################################################################################

    # 1.st Step
    # Convert image to gray image and blur the image to rease noise in the image.

    # 2.nd Step
    # Then find the area with text
    # With a larger kernel on X axis to get rid of all spaces between words,
    # and a smaller kernel on Y axis to blend in lines of one block between each other,
    # but keep larger spaces between text blocks intact. (in the original state or similar to that state)
    # text becomes white (255,255,255), and background is black (0,0,0)

    if len(img.shape) == 3:
        img = cv2.cvtColor(src = img, code = cv2.COLOR_BGR2GRAY)
    img = contour_img(img = img)

    #####################################################################################################################

    # 3.rd Find text blocks (contour detect white area)

    # 4.th There can be various approaches to determine skew angle,
    # but we’ll stick to the simple one — take the largest text block and use its angle.
    largest_contour = sort_general_contours(contour = get_general_contours(img = img))[-1]

    #####################################################################################################################

    # 5.th calculating angle.
    # The angle value always lies between [-90,0).
    # https://theailearner.com/tag/cv2-minarearect/

    min_area_rect = cv2.minAreaRect(points = largest_contour)
    angle = min_area_rect[-1]
    if angle < -45:
        angle = 90 + angle
    if angle > 45:
        angle = angle - 90

    return angle

#-----------------------------------------------------------------------------------------

def rotate(img: np.ndarray, angle: int | None = None) -> np.ndarray:
    (h, w) = img.shape[:2]
    center = (w // 2, h // 2)
    if not isinstance(angle, (int, float)):
        angle = get_skew_angle(img = img)
    rotation_matrix = cv2.getRotationMatrix2D(center=center, angle=angle, scale=1.0)
    return cv2.warpAffine(
        src=img,
        M=rotation_matrix,
        dsize=(w, h),
        flags=cv2.INTER_CUBIC,
        borderMode=cv2.BORDER_REPLICATE,
    )

#-----------------------------------------------------------------------------------------
