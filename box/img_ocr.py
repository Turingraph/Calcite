import cv2
import numpy as np
from pytesseract import Output

from img_process.utility import get_size, check_img
from include.img_process_rgb import img_process_rgb
from ocr_config.flag_options import get_oem, get_psm
from ocr_config.img_to_str import img_to_str
from ocr_config.osd import osd
from ocr_config.save_text import save_text
from box.img_view import img_view

"""
Purpose
-	Get text that surrounding the given area.

Attribute

NAME        TYPE      		UPDATE_METHOD	DESCRIPTION
img         np.ndarray		__init__()		image input.
output      str       		img_to_text()	ocr text output
psm         str       		__init__()		OCR Setting : Page Segmentation Modes
oem         str       		__init__()		OCR Setting : OCR Engine Mode
lang        str       		__init__()		OCR Setting : Languages
timeout     str       		__init__()		OCR Setting : Maximum time, 0 = any time
is_space    str       		__init__()		OCR Setting : It is recommended to set false when 
											use non spacing language e.g. Thai, Chinese etc.
config      str       		__init__()		other OCR Settings
box       list[list[int]] img_to_text()	array of box around text, represented as [x, y, w = width, h = height]
"""

class img_ocr:
    def __init__(
            self,
            img:np.ndarray|str,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            timeout:int = 0,
            config:str = '',
            is_space:bool = True
            ):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be img_process, np.ndarray or str")
        self.img = img_process_rgb(img = img)
        self.output:str = ''
        self.lang:str = lang
        self.psm:str = get_psm(psm)
        self.oem:str = get_oem(oem)
        self.timeout:int = timeout
        self.config:str = config
        self.is_space:bool = is_space
        self.box:list[list[int]] = []

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET TEXT RELATED DATA
    # Get Box around the word
    def img_to_text(
            self, 
            conf:int = 60, 
            search:str="", 
            is_space:bool = True,
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
        ):
        w = self.img.img.shape[1]
        h = self.img.img.shape[0]

        # https://nanonets.com/blog/ocr-with-tesseract/
        min_x = get_size(size=min_x, maxval=w)
        min_y = get_size(size=min_y, maxval=h)
        max_x = get_size(size=max_x, maxval=w,default_size=w)
        max_y = get_size(size=max_y, maxval=h,default_size=h)

        min_w = get_size(size=min_w, maxval=w)
        min_h = get_size(size=min_h, maxval=h)
        max_w = get_size(size=max_w, maxval=w,default_size=w)
        max_h = get_size(size=max_h, maxval=h,default_size=h)

        self.box = []

        d = img_to_str(
            self.img.img, 
            output_type=Output.DICT,
            lang=self.lang,
            config=self.config,
            timeout=self.timeout
        )
        self.output = ""
        for i in range(len(d['text'])):
            if (
                int(d['conf'][i]) > conf and (search == "" or (search != "" and search in d['text'][i])) and 
                (d['left'][i] > min_x and d['left'][i] < max_x) and 
                (d['top'][i] > min_y and d['top'][i] < max_y) and 
                (d['width'][i] > min_w and d['width'][i] < max_w) and 
                (d['height'][i] > min_h and d['height'][i] < max_h)):
                    self.box.append((d['left'][i], d['top'][i], d['width'][i], d['height'][i]))
                    if i > 0 and d['left'][i] <= d['left'][i-2]:
                        self.output += "\n"
                    self.output += d['text'][i]
                    if is_space == True:
                        self.output += " "

    # Get OSD (Orientation and Script Detection) data from the input img image
    def osd(self, img:np.ndarray, out_type:str = Output.STRING) -> any:
        return osd(img=img, out_type=out_type, timeout=self.timeout)

    # save the OCR text output `self.output` as text file
    def save_text(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        save_text(self.output, path)

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET DATA

    def get_img_view(self):
        return img_view(
            img=self.img.img,
            box = self.box
        )

    def get_img(self) -> np.ndarray:
        return self.img.img

    def get_box(self):
        return self.box

#-----------------------------------------------------------------------------------------
