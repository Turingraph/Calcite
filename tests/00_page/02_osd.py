###############################################################################################################

import sys
import os

current = os.path.dirname(os.path.realpath(__file__))
parent = os.path.dirname(current)
parent = os.path.dirname(parent)
sys.path.append(parent)

###############################################################################################################
from pytesseract import Output
from include.img_process_gray import img_process_gray
from include.ocr import ocr

#   # This input image cause error with osd method, because Tesseract does not discover any text on the unprocessed image.
#   path = parent + "/tests/00_page/img/img.jpg"

path = parent + "/tests/00_page/img_out/img_out.jpg"

img = img_process_gray(img=path)
ocr_setting = ocr()
out = ocr_setting.osd(img=img,out_type=Output.DICT)
print(out)