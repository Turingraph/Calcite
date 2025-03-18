import numpy as np
from pytesseract import Output

from img_process.utility import check_img, get_size
from include.boxes_img import boxes_img
from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

#-----------------------------------------------------------------------------------------

# Convert any image as np.ndarray
def img_to_ndarray(
        img:img_process_gray|img_process_rgb|str|np.ndarray
) -> np.ndarray:
    if isinstance(img, str):
        img = img_process_gray(img = img)
        return img.img
    elif isinstance(img, (img_process_gray, img_process_rgb)):
        return img.img
    elif isinstance(img, np.ndarray):
        return check_img(img)
    elif isinstance(img, boxes_img):
        pass
    else:
        message = """
-------------------------------------------------------------------------------------------
include/multi_ocrs.py/class multi_ocrs/def __init__()

img:img_process_gray|img_process_rgb|str|np.ndarray|list[img_process_gray]|list[img_process_rgb]|list[str]|list[np.ndarray],
-------------------------------------------------------------------------------------------
"""
        raise TypeError(message)

#-----------------------------------------------------------------------------------------

# Convert any image array as np.ndarray array
def imgs_to_ndarrays(img_arr:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[
                    img_process_gray|
                    img_process_rgb|
                    str|
                    np.ndarray|
                    boxes_img
                ]
        ) -> list[np.ndarray]:
    out = []
    if isinstance(img_arr, list):
        for i in img_arr:
            if isinstance(i, boxes_img):
                for j in i.get_imgs():
                    out.append(j)
            else:
                out.append(img_to_ndarray(img=i))
    elif isinstance(img_arr, boxes_img):
        for j in img_arr.get_imgs():
            out.append(j)
    else:
        out = [img_to_ndarray(img=img_arr)]
    return out

#-----------------------------------------------------------------------------------------

'''
Attribute

NAME        TYPE                DESCRIPTION
ocr_setting ocr_config          Help user to edit the ocr configulation.
output      str                 total text output based on self.img_arr and img_to_str
output_arr  list[str]           array of string where every item in array is the sub array of self.output
img_arr     list[np.ndarray]    Array of np.ndarray image. We don't use img_process class 
                                because there is no needed for processing the proper image
                                and prevent violating Single Responsibility Principle.
'''

class ocr_config_arr:
    def __init__(self, 
            img_arr:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[
                    img_process_gray|
                    img_process_rgb|
                    str|
                    np.ndarray|
                    boxes_img
                ],
            ocr_setting:ocr_config = ocr_config()
            ):
        self.ocr_setting:ocr_config = ocr_setting
        self.output:str = ''
        self.output_arr:list[str] = []
        self.img_arr:list[np.ndarray] = imgs_to_ndarrays(img_arr=img_arr)

#-----------------------------------------------------------------------------------------

    # Update self.output_arr and self.output, based on self.ocr_setting and self.img_arr
    def img_to_str(self)->None:
        self.output_arr = []
        self.output = ''
        for i in self.img_arr:
            self.ocr_setting.img_to_str(img = i)
            self.output_arr.append(self.ocr_setting.out)
            self.output += self.ocr_setting.out
    
#-----------------------------------------------------------------------------------------

    # Save one text file.
    def save_text(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        self.ocr_setting.out = self.output
        self.ocr_setting.save_text(path=path)
    
#-----------------------------------------------------------------------------------------

    # Save multiple text files.
    def save_text_arr(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        if isinstance(path, str):
            path = ["text", path, "txt"]
        count = 0
        for i in self.img_arr:
            self.ocr_setting.img_to_str(img = i)
            count_stars = str(count)
            if count < 10:
                count_stars = '0' + count_stars
            self.ocr_setting.save_text(path=[path[0], path[1] + '_' + count_stars, path[2]])
            count += 1
    
#-----------------------------------------------------------------------------------------

    # Get OSD (Orientation and Script Detection) data of one selected self.img_arr image.
    def osd(self, out_type:str = Output.STRING, index:int = 0) -> any:
        index = get_size(size=index,maxval=len(self.img_arr))
        return self.ocr_setting.osd(self.img_arr[index], out_type=out_type)
    
#-----------------------------------------------------------------------------------------

    # Change the value of self.img_arr
    def update_img_arr(
            self,
            img_arr:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[
                    img_process_gray|
                    img_process_rgb|
                    str|
                    np.ndarray|
                    boxes_img
                ]
            )-> None:
        self.img_arr = imgs_to_ndarrays(img_arr=img_arr)

#-----------------------------------------------------------------------------------------
