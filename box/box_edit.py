import cv2
import numpy as np
from pytesseract import Output

from box.box_read import box_read
from box.get_row import (add_area, col_box, col_half, filter_half, row_box,
                         row_half)
from box.ocr import get_oem, get_osd, get_psm, save_text
from box.update_box import get_ocr, select_box, update_area_box
from img_process.contour import get_contours, sort_contours
from img_process.utility import check_img

'''
Purpose
-	View and save image.

Attribute

NAME	TYPE				UPDATE_METHOD	DESCRIPTION
img		np.ndarray			update_img()	image input
box		list[list[int]]		-				box around the given region.
'''

class box_edit:
    def __init__(
            self, 
            img: np.ndarray | str,
            ):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be np.ndarray or str")
        self.__img:np.ndarray = img
        self.__dilate_img = img
        self.__all_box = []
        self.__box = []
        self.__output = ""

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET PRIVATE ATTRIBUTE AS READ ONLY VARIABLE.

    def get_box_read(self):
        return box_read(img=self.__img, box=self.__box)

    def get_dilate_box_read(self):
        return box_read(img=self.__dilate_img, box=self.__box)

    def get_img(self):
        return self.__img
    
    def get_all_box(self):
        return self.__all_box
    
    def get_box(self):
        return self.__box
    
    def get_output(self):
        return self.__output

#-----------------------------------------------------------------------------------------
    # PURPOSE : MANAGE BOX

    def sort_box(self, reverse: bool = False, method: int = 4)->None:
        self.__box = sort_contours(contour=self.__box, reverse=reverse, method=method)

    def row_box(self, is_double:bool = False):
        self.__box = row_box(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            is_double=is_double,
        )

    def row_half(self, index:int = 0, is_double:bool = False, is_sort:bool = True):
        self.__box = row_half(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            index=index,
            is_double=is_double,
            is_sort=is_sort
        )

    def col_box(self, is_double:bool = False):
        self.__box = col_box(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            is_double=is_double,
        )

    def col_half(self, index:int = 0, is_double:bool = False, is_sort:bool = True):
        self.__box = col_half(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            index=index,
            is_double=is_double,
            is_sort=is_sort
        )

    def filter_half(self, is_odd:bool = False):
        self.__box = filter_half(
            box=self.__box, 
            is_odd=is_odd)

    def add_x(self, area:int, index:int = 0):
        self.__box = add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[1],
            mode = 0,
            index=index)

    def add_y(self, area:int, index:int = 0):
        self.__box = add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[0],
            mode = 1,
            index=index)

    def add_width(self, area:int, index:int = 0):
        self.__box = add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[1],
            mode = 2,
            index=index)

    def add_height(self, area:int, index:int = 0):
        self.__box = add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[0],
            mode = 3,
            index=index)

#-----------------------------------------------------------------------------------------
    # PURPOSE : UPDATE self.__all_box and self.__box

    def update_area_box(self,
            thresh_px: int = 0,
            kernel: np.ndarray = np.ones(shape=(2, 30)),
            ksize: int = 9) -> None:
        output = update_area_box(
            img=self.__img,
            thresh_px = thresh_px,
            kernel = kernel,
            ksize = ksize
        )
        self.__all_box = get_contours(img=output)
        self.__dilate_img = output
        self.__box = self.__all_box

    # def update_area_invert_box(self):
    #     self.__dilate_img = invert_img(img = self.__dilate_img)
    #     self.__all_box = get_contours(img=self.__dilate_img)
    #     self.__box = self.__all_box

    def select_box(self,
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
        ):
        self.__box = select_box(
            w = self.__img.shape[1],
            h = self.__img.shape[0],
            all_box = self.__all_box,
            min_x = min_x,
            max_x = max_x,
            min_y = min_y,
            max_y = max_y,
            min_w = min_w,
            max_w = max_w,
            min_h = min_h,
            max_h = max_h,
        )

    def select_all_box(self):
        self.__box = self.__all_box

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET OCR OUTPUT

    def get_ocr(self,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            config:str = '',
            timeout:int = 0,
            conf:int = 60, 
            search:str="", 
            is_space:bool = True,
            column:list[int] = []
        ):
        output = get_ocr(
            img=self.__img,
            lang=lang,
            config=config + ' ' + get_oem(oem) + ' ' + get_psm(psm),
            timeout=timeout,
            conf=conf,
            search=search,
            is_space=is_space,
            column=column
        )
        self.__all_box = output[0]
        self.__box = self.__all_box
        self.__output = output[1]

    def get_osd(self, out_type:str = Output.STRING, timeout:int = 0) -> any:
        return get_osd(img=self.__img, out_type=out_type, timeout=timeout)

    def save_text(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        save_text(self.__output, path)

#-----------------------------------------------------------------------------------------
