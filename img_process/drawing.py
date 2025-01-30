import cv2
import numpy as np
from img_process.utility import get_rgb, check_img, set_px

def rectangle(img:np.ndarray, rgb:list[int]|int, x:int, y:int, h:int, w:int) -> np.ndarray:
    img = check_img(img=img)
    if img.shape == 2:
        if isinstance(rgb, int):
            rgb = set_px(n=rgb)
        else:
            rgb = set_px(n=rgb[0])
    else:
        rgb = get_rgb(rgb)
    return cv2.rectangle(img=img, pt1=(x, y), pt2=(x+w, y+h), color=rgb, thickness=2)
