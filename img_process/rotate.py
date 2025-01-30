from img_process.contour import get_contours, sort_contours, contour_img
import numpy as np
import cv2

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
    largest_contour = sort_contours(contour = get_contours(img = img))[-1]

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
