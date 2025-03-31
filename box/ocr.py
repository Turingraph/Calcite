import os
import re

import numpy as np
import pytesseract
from pytesseract import Output

from box.warning import warn_get_psm, warn_get_oem, warn_get_osd
from utility.utility import get_options

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
    out_type = get_options(input=out_type, input_options=(Output.STRING,Output.BYTES, Output.DATAFRAME, Output.DICT), message=message)
    return pytesseract.image_to_osd(image = img, output_type=out_type,timeout=timeout)

#-----------------------------------------------------------------------------------------
# PURPOSE : SAVE TEXT OUTPUT

def save_text(
    text:str,
    path: list[str] | str = ["text", "text", "txt"],
)-> None:
    # time : O(1)
    # space: O(1)
    if isinstance(path, list):
        if len(path) == 0:
            path = ["text", "text", "txt"]
        if len(path) == 1:
            path = [path[0], "text", "txt"]
        if len(path) == 2:
            path = [path[0], path[1], "txt"]
    if isinstance(path, str):
        path = ["text", path, "txt"]
    # https://www.w3schools.com/python/python_file_write.asp
    # https://www.geeksforgeeks.org/python-check-if-a-file-or-directory-exists/
    if not os.path.exists(path=path[0]):
        os.makedirs(name=path[0])
    path = os.path.join(path[0], path[1] + "." + path[2])
    file = open(file=path, mode="w")
    file.write(text)
    file.close()

#-----------------------------------------------------------------------------------------
