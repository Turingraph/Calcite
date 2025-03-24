import os
import re

import numpy as np
import pytesseract
from pytesseract import Output

from utility.utility import get_options

#-----------------------------------------------------------------------------------------
# PURPOSE : GET VALID OCR CONFIGURATION INPUT

# Help user select valid PSM (Page Segmentation Mode) for img_to_str
def get_psm(psm:str|int|None)->str:
    message = """
-------------------------------------------------------------------------------------------
ocr/flag_options.py/def get_psm

def get_psm(psm:str)->str:
# This function check if user Tesseract `psm` (Page Segmentation Method) input is available, if not it return the default input.

available `psm` options with Reliability and Description

Mode	Reliability	    Description
--psm 1		NOT RECOMMEND   Default Mode + OSD
--psm 2		NOT RECOMMEND   Unavailable
--psm 3		USEFUL		   	Default Mode
--psm 4		USEFUL			Table
--psm 5		USEFUL			Table + OSD
--psm 6		USEFUL			Book
--psm 7		USEFUL			Single Line
--psm 8		USEFUL			Single Word
--psm 9		NOT RECOMMEND	Single Curve Line
--psm 10	USEFUL			Single Char
--psm 11	USEFUL			No Order
--psm 12	NOT RECOMMEND	No Order + OSD
--psm 13	USEFUL			Deactivate Segmentation Method

Reference
*   https://github.com/Turingraph/JOCR/blob/master/doc/ocr_psm_tutorial.md
*   https://pyimagesearch.com/2021/11/15/tesseract-page-segmentation-modes-psms-explained-how-to-improve-your-ocr-accuracy/
-------------------------------------------------------------------------------------------
"""
    if type(psm) == str:
        psm = int_from_str(psm)
    out = get_options(
        input = psm,
        input_options=[3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        message=message
    )
    return '--psm ' + str(out)

# Help user select valid OEM (OCR Engine Mode) for img_to_str
def get_oem(oem:str|int|None)->str:
    message = """
-------------------------------------------------------------------------------------------
ocr/flag_options.py/def get_oem

def get_oem(oem:str|int)->str:
# This function check if user Tesseract `oem` (Engine Mode) input is available, if not it return the default input.

available `oem` options
-   0    Legacy engine only.
-   1    Neural nets LSTM engine only.
-   2    Legacy + LSTM engines.
-   3    Default, based on what is available.

Execute this line to see more details.
-   tesseract --help-oem
-------------------------------------------------------------------------------------------
"""
    if type(oem) == str:
        oem = int_from_str(oem)
    out = get_options(input=oem, input_options=[3, 2, 1, 0], message=message)
    return "--oem " + str(out)

def int_from_str(text: str) -> int:
    match = re.search(r'\b\d+\b', text)
    if match:
        return int(match.group())
    raise ValueError("Error: No number found in the input string.")

#-----------------------------------------------------------------------------------------
# PURPOSE : Get OSD (Orientation and Script Detection) data from the input img image

def osd(img:np.ndarray, out_type:str = Output.STRING,timeout:int = 0)->any:
    message = """
-------------------------------------------------------------------------------------------
ocr/osd.py/def osd

def osd(img:np.ndarray, out_type:str,timeout:int = 0)->any:
# This function return the Tesseract OCR's output that show the orientation and 

available `out_type` options
-   pytesseract.Output.STRING
-   pytesseract.Output.BYTES
-   pytesseract.Output.DATAFRAME
-   pytesseract.Output.DICT

Here is the example
```
from PIL import Image
import pytesseract

im = Image.open(path) # path is the path of input image.
osd = pytesseract.image_to_osd(im, out_type='dict')
print(osd)

#   {
#       'page_num': 0, 
#       'orientation': 180, 
#       'rotate': 180, 
#       'orientation_conf': 20.69, 
#       'script': 'Latin', 
#       'script_conf': 33.33
#   }

#   It make 6 output
#   1. `'page_num'` (Page number)
#   * The page index of the current item
#   2. `'orientation'` (Orientation in degree)
#   * the detected rotation of the image
#   3. `'rotate'` (Rotate)
#   * the required rotation angle to get the text in a horizontal format
#   4. `'orientation_conf'` (Orientation confidence)
#   * the confidence of Tesseract that the orientation was detected correctly
#   * higher is better
#   5. `'script'` (Script)
#   * provides information about the language or script family to which the detected text belongs
#   6. `'script_conf'` (Script confidence)
#   * the confidence of Tesseract that the script was detected correctly
#   * higher is better
```

Reference
*   https://www.kaggle.com/code/dhorvay/pytesseract-orientation-script-detection-osd
*   https://github.com/Turingraph/JOCR/blob/master/doc/ocr_psm_tutorial.md
-------------------------------------------------------------------------------------------
"""
    out_type = get_options(input=out_type, input_options=[Output.STRING,Output.BYTES, Output.DATAFRAME, Output.DICT], message=message)
    return pytesseract.image_to_osd(image = img, output_type=out_type,timeout=timeout)

#-----------------------------------------------------------------------------------------
# PURPOSE : SAVE TEXT OUTPUT

def save_text(
    text:str,
    path: list[str] | str = ["text", "text", "txt"],
)-> None:
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
