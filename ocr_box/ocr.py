import os
import re

import cv2
import numpy as np
import pytesseract
from pytesseract import Output

from img_process_class.img_process_gray import img_process_gray
from ocr_box.warning import warn_get_psm, warn_get_oem, warn_get_osd
from utility.utility import create_text_dir, get_options, get_valid_path

#-----------------------------------------------------------------------------------------
# PURPOSE : GET VALID OCR CONFIGURATION INPUT

# Help user select valid PSM (Page Segmentation Mode) for img_to_str
def get_psm(psm:str|int|None)->str:
    # time : O(1)
    # space: O(1)
    message = warn_get_psm()
    if type(psm) == str:
        psm = int_from_str(psm)
    out = get_options(
        input = psm,
        input_options=(3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13),
        message=message
    )
    return '--psm ' + str(out)

# Help user select valid OEM (OCR Engine Mode) for img_to_str
def get_oem(oem:str|int|None)->str:
    # time : O(1)
    # space: O(1)
    message = warn_get_oem()
    if type(oem) == str:
        oem = int_from_str(oem)
    out = get_options(input=oem, input_options=(3, 2, 1, 0), message=message)
    return "--oem " + str(out)

def int_from_str(text: str) -> int:
    # time : O(n)
    # space: O(n)
    match = re.search(r'\b\d+\b', text)
    if match:
        return int(match.group())
    raise ValueError("Error: No number found in the input string.")

#-----------------------------------------------------------------------------------------
# PURPOSE : Get OSD (Orientation and Script Detection) data from the input img image

def get_osd(img:np.ndarray, out_type:str = Output.STRING,timeout:int = 0)->any:
    # time : O(1) regardless of how OCR Model works
    # space: O(1)
    message = warn_get_osd()
    out_type = get_options(
        input=out_type, 
        input_options=(Output.STRING,Output.BYTES, Output.DATAFRAME, Output.DICT), 
        message=message)
    try:
        if len(img.shape) == 2:
            # print("Ken",type(img),img.shape)
            return pytesseract.image_to_osd(
                image = img, 
                output_type=out_type,
                timeout=timeout)
        elif len(img.shape) == 3:
            img = cv2.cvtColor(src=img, code=cv2.COLOR_RGB2GRAY)
            # print("Ken",type(img),img.shape)
            return pytesseract.image_to_osd(
                image = img, 
                output_type=out_type, 
                timeout=timeout)
        else:
            return "img is invalid. img should be np.ndarray where img.shape in [2, 3]."
    except:
        return """
# Pleace use this command instead.
pytesseract.image_to_osd(
    image:      np.ndarray          = img, 
    output_type:pytessetact.Output  = out_type, 
    timeout:    int                 = timeout,
    config:     str     = '--psm 0 -c min_characters_to_try=5'
)

# Read this for more details.
# 1.    https://stackoverflow.com/questions/67920740/pytesseract-invalid-resolution-0-dpi
# 2.    https://www.kaggle.com/code/dhorvay/pytesseract-orientation-script-detection-osd
        """
#-----------------------------------------------------------------------------------------
# PURPOSE : SAVE TEXT OUTPUT

def save_text(
    text:str,
    path: str = "text/text.txt",
    absolute:bool = False
)-> None:
    # https://stackoverflow.com/questions/2967194/
    # open-in-python-does-not-create-a-file-if-it-doesnt-exist
    # time : O(n + m) 
    # space: O(n + m) 
    # n = depth of path
    # m = side of text
    path = get_valid_path(
        path=path,
        format_options=None,
        absolute=absolute,
    )
    create_text_dir(path=path)
    # if os.path.isfile(os.path.join("/", *(path.split("/")))) == False:
    #     open(file=path, mode="x")
    file = open(file=path, mode="w")
    file.write(text)
    file.close()
