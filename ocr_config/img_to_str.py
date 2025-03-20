import pytesseract
import numpy as np
import cv2

# https://github.com/tesseract-ocr/tesseract/issues/2702

def img_to_str(
        img:str|np.ndarray,
        lang:str = "eng",
        config:str = "",
        timeout:int = 0,
        is_space:bool = True
    ) -> str:
    if type(img) == str:
        img = cv2.imread(filename=img)
    spaceship = ""
    if is_space == False:
        spaceship = " -c preserve_interword_spaces=1"
    return pytesseract.image_to_string(
        image=img,
        lang=lang,
        config=config + spaceship,
        timeout=timeout)
