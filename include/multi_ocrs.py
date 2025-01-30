from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb
from img_process.utility import check_img, get_size
from include.boxes_img import boxes_img
from include.ocr import ocr
from pytesseract import Output
import numpy as np

def get_np_ndarray(
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

def get_multi_np_ndarray(multi_imgs:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[img_process_gray]|
                list[img_process_rgb]|
                list[str]|
                list[np.ndarray]|
                list[boxes_img]
        ) -> list[np.ndarray]:
    out = []
    if isinstance(multi_imgs, list):
        for i in multi_imgs:
            if isinstance(i, boxes_img):
                for j in i.get_imgs():
                    out.append(j)
            else:
                out.append(get_np_ndarray(img=i))
    elif isinstance(multi_imgs, boxes_img):
        for j in multi_imgs.get_imgs():
            out.append(j)
    else:
        out = [get_np_ndarray(img=multi_imgs)]
    return out

class multi_ocrs:
    def __init__(self, 
            multi_imgs:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[img_process_gray]|
                list[img_process_rgb]|
                list[str]|
                list[np.ndarray]|
                list[boxes_img],
            ocr_setting:ocr = ocr()
            ):
        self.ocr_setting = ocr_setting
        self.out = ''
        self.multi_out = []
        self.multi_imgs = get_multi_np_ndarray(multi_imgs=multi_imgs)

    def img_to_str(self)->None:
        self.multi_out = []
        self.out = ''
        for i in self.multi_imgs:
            self.ocr_setting.img_to_str(img = i)
            self.multi_out.append(self.ocr_setting.out)
            self.out += self.ocr_setting.out
    
    def save_text(self, path: list[str] | str = ["str_out", "str_out", "txt"])-> None:
        self.ocr_setting.out = self.out
        self.ocr_setting.save_text(path=path)
    
    def save_milti_text(self, path: list[str] | str = ["str_out", "str_out", "txt"])-> None:
        if isinstance(path, str):
            path = ["str_out", path, "txt"]
        count = 0
        for i in self.multi_imgs:
            self.ocr_setting.img_to_str(img = i)
            count_stars = str(count)
            if count < 10:
                count_stars = '0' + count_stars
            self.ocr_setting.save_text(path=[path[0], path[1] + '_' + count_stars, path[2]])
            count += 1
    
    def osd(self, out_type:str = Output.STRING, index:int = 0) -> any:
        index = get_size(size=index,maxval=len(self.multi_imgs))
        return self.ocr_setting.osd(self.multi_imgs[index], out_type=out_type)
    
    def update_multi_imgs(
            self,
            multi_imgs:
                img_process_gray|
                img_process_rgb|
                str|
                np.ndarray|
                boxes_img|
                list[img_process_gray]|
                list[img_process_rgb]|
                list[str]|
                list[np.ndarray]|
                list[boxes_img],
            )-> None:
        self.multi_imgs = get_multi_np_ndarray(multi_imgs=multi_imgs)
