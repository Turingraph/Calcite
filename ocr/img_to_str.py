import pytesseract
import numpy as np
import cv2

def img_to_str(
        img:str|np.ndarray,
        lang:str = "eng",
        config:str = "",
        timeout:int = 0
    ) -> str:
    if type(img) == str:
        img = cv2.imread(filename=img)
    return pytesseract.image_to_string(
        image=img,
        lang=lang,
        config=config,
        timeout=timeout)
