import pytesseract
from pytesseract import Output
import numpy as np
from utility.utility import get_options

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
