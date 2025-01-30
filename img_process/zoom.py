import cv2
import numpy as np
from img_process.utility import get_size

# https://github.com/wjbmattingly/ocr_python_textbook/blob/main/02_02_working%20with%20opencv.ipynb

def remove_borders(img: np.ndarray) -> np.ndarray:
    contours, heiarchy = cv2.findContours(
        src=img, mode=cv2.RETR_EXTERNAL, method=cv2.CHAIN_APPROX_SIMPLE
    )
    cnts_sorted = sorted(iterable=contours, key=lambda x: cv2.contourArea(x))
    cnt = cnts_sorted[-1]
    x, y, w, h = cv2.boundingRect(array=cnt)
    crop = img[y : y + h, x : x + w]
    return crop

def zoom(img: np.ndarray, zoom: int = 1) -> np.ndarray:
    # https://stackoverflow.com/questions/69050464/zoom-into-image-with-opencv
    # zoom < 1 implies Zoom out
    # zoom > 1 implies Zoom in
    rotation_matrix = cv2.getRotationMatrix2D(
        center=(img.shape[1] / 2, img.shape[0] / 2), angle=0, scale=abs(zoom)
    )
    result = cv2.warpAffine(
        src=img, M=rotation_matrix, dsize=img.shape[1::-1], flags=cv2.INTER_LINEAR
    )
    return result


def create_borders(img: np.ndarray, size: int = 50) -> np.ndarray:
    top, bottom, left, right = [abs(size)] * 4
    img = cv2.copyMakeBorder(
        src=img, top=top, bottom=bottom, left=left, right=right, borderType=cv2.BORDER_CONSTANT
    )
    return img

def crop(
    img: np.ndarray,
    x: int | None = None,
    y: int | None = None,
    w: int | None = None,
    h: int | None = None,
) -> np.ndarray:
    x = get_size(size=x, maxval=img.shape[1])
    y = get_size(size=y, maxval=img.shape[0])
    if type(w) == int:
        w = get_size(size=x + w, maxval=img.shape[1], default_size=img.shape[1] - x)
    else:
        w = img.shape[1]
    if type(h) == int:
        h = get_size(size=y + h, maxval=img.shape[0], default_size=img.shape[0] - y)
    else:
        h = img.shape[0]
    return img[y : y + h, x : x + w]
