import copy

import cv2
import numpy as np
import pytesseract
from pytesseract import Output

from img_process.contour import get_contours, sort_contours, get_box_area
from img_process.show import get_valid_path
from img_process.utility import check_img, get_size, rgb_img
from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb
from include.ocr_config import ocr_config

'''
Attribute

NAME        TYPE                DESCRIPTION
origin_img  img_process_rgb     original img image
marked_img  img_process_rgb     origin_img with the images of boxes (self.boxes)
dilate_img  img_process_gray    dilate image for getting the format of the text
all_boxes   tuple               array of all boxes generated by get_contours(img=self.dilate_img.img)
boxes       list                selected boxes from all_boxes, filtered by select_boxes
'''

class boxes_img:
    def __init__(self, 
                img: np.ndarray | str,
                thresh_px: int = 0,
                kernel: np.ndarray = np.ones(shape=(2, 30)),
                ksize: int = 9):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be img_process, np.ndarray or str")
        self.origin_img:img_process_rgb = img_process_rgb(img = rgb_img(img))
        self.marked_img:img_process_rgb = copy.deepcopy(self.origin_img)
        img:img_process_gray = img_process_gray(img=img)
        img.contour_img(
            thresh_px=thresh_px,
            kernel=kernel,
            ksize=ksize)
        self.dilate_img:img_process_gray = img
        self.all_boxes:tuple = get_contours(img=self.dilate_img.img)
        self.boxes = []

#-----------------------------------------------------------------------------------------
    # TITLE : CREATE AND SELECT BOX
    # (x, y, width, height) = (arr[i-1].x, arr[i-1].y, arr[i].x - arr[i-1].x, arr[i].y- arr[i-1].y)

    # Update dilate_img using img_process_gray.contour_img method
    def update_dilate_img(self,                
                thresh_px: int = 0,
                kernel: np.ndarray = np.ones(shape=(2, 30)),
                ksize: int = 9) -> None:
        self.marked_img = copy.deepcopy(self.origin_img)
        img = img_process_gray(img = copy.deepcopy(self.origin_img.img))
        img = img_process_gray(img=img)
        img.contour_img(
            thresh_px=thresh_px,
            kernel=kernel,
            ksize=ksize)
        self.dilate_img = img
        self.all_boxes = get_contours(img=self.dilate_img.img)
        self.boxes = []

    # Get selected box as self.boxes from self.all_boxes filtered by this function.
    def select_boxes(
            self, 
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
            ) -> None:
        min_x = get_size(size=min_x, maxval=self.marked_img.img.shape[1])
        min_y = get_size(size=min_y, maxval=self.marked_img.img.shape[0])
        max_x = get_size(size=max_x, maxval=self.marked_img.img.shape[1],default_size=self.marked_img.img.shape[1])
        max_y = get_size(size=max_y, maxval=self.marked_img.img.shape[0],default_size=self.marked_img.img.shape[0])

        min_w = get_size(size=min_w, maxval=self.marked_img.img.shape[1])
        min_h = get_size(size=min_h, maxval=self.marked_img.img.shape[0])
        max_w = get_size(size=max_w, maxval=self.marked_img.img.shape[1],default_size=self.marked_img.img.shape[1])
        max_h = get_size(size=max_h, maxval=self.marked_img.img.shape[0],default_size=self.marked_img.img.shape[0])
        self.all_boxes = get_contours(img=self.dilate_img.img)
        
        self.boxes = []
        for i in self.all_boxes:
            if (
                (i[0] > min_x and i[0] < max_x) and 
                (i[1] > min_y and i[1] < max_y) and 
                (i[2] > min_w and i[2] < max_w) and 
                (i[3] > min_h and i[3] < max_h)
                ):
                self.boxes.append(i)

    # Update self.boxes based on the row of previous self.boxes
    def row_boxes(self, is_double:bool = False):
        new_boxes = []
        w = self.origin_img.shape()[1]
        h = self.origin_img.shape()[0]
        arr = sort_contours(contour=self.boxes, method=1)
        for i in range(len(arr)):
            if i == 0:
                new_boxes.append((0, 0, w, arr[0][1]))
            else:
                if is_double == True:
                    new_boxes.append((0, arr[i-1][1], w, arr[i-1][3]))
                    new_boxes.append((0, arr[i-1][1] + arr[i-1][3], w, arr[i][1] - (arr[i-1][1] + arr[i-1][3])))
                else:
                    new_boxes.append((0, arr[i-1][1], w, arr[i][1]-arr[i-1][1]))
        if len(arr) > 0:
            if is_double == True:
                new_boxes.append((0, arr[len(arr)-1][1], w, arr[len(arr)-1][3]))
                new_boxes.append((0, arr[len(arr)-1][1] + arr[len(arr)-1][3], w, h - (arr[len(arr)-1][1] + arr[len(arr)-1][3])))
            else:
                new_boxes.append((0, arr[len(arr)-1][1], w, h-arr[len(arr)-1][1]))
        self.boxes = new_boxes

    # Update self.boxes as 2 parts, based on the index-th row of previous self.boxes
    def row_half(self, index:int = 0):
        if abs(index) < len(self.boxes):
            new_boxes = []
            w = self.origin_img.shape()[1]
            h = self.origin_img.shape()[0]
            arr = sort_contours(contour=self.boxes, method=1)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    new_boxes.append((0, 0, w, arr[i][1]))
                    new_boxes.append((0, arr[i][1], w, h))
                    i = len(arr)
                i += 1
            self.boxes = new_boxes

    # Update self.boxes based on the column of previous self.boxes
    def col_boxes(self, is_double:bool = False):
        new_boxes = []
        w = self.origin_img.shape()[1]
        h = self.origin_img.shape()[0]
        # don't forget to add parameter name because
        # arr = sort_contours(self.boxes, 0) is not working
        arr = sort_contours(contour=self.boxes, method=0)
        for i in range(len(arr)):
            if i == 0:
                new_boxes.append((0, 0, arr[0][0], h))
            else:
                if is_double == True:
                    new_boxes.append((arr[i-1][0], 0, arr[i-1][2], h))
                    new_boxes.append((arr[i-1][0] + arr[i-1][2], 0, arr[i][0] - (arr[i-1][0] + arr[i-1][2]), h))
                else:
                    new_boxes.append((arr[i-1][0], 0, arr[i][0]-arr[i-1][0], h))
        if len(arr) > 0:
            if is_double == True:
                new_boxes.append((arr[len(arr)-1][0], 0, arr[len(arr)-1][2], h))
                new_boxes.append((arr[len(arr)-1][0] + arr[len(arr)-1][2], 0, w - (arr[len(arr)-1][0] + arr[len(arr)-1][2]), h))
            else:
                new_boxes.append((arr[len(arr)-1][0], 0, w-arr[len(arr)-1][0], h))
        self.boxes = new_boxes

    # Update self.boxes as 2 parts, based on the index-th column of previous self.boxes
    def col_half(self, index:int = 0):
        if abs(index) < len(self.boxes):
            new_boxes = []
            w = self.origin_img.shape()[1]
            h = self.origin_img.shape()[0]
            arr = sort_contours(contour=self.boxes, method=0)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    new_boxes.append((0, 0, arr[i][0], h))
                    new_boxes.append((arr[i][0], 0, w, h))
                    i = len(arr)
                i += 1
            self.boxes = new_boxes

    # Get Box around the word
    def word_boxes(
            self, 
            reset:bool = True, 
            config:ocr_config = ocr_config(), 
            conf:int = 60, 
            search:str="", 
            lang:None|str=None):
        # https://nanonets.com/blog/ocr-with-tesseract/
        language = config.lang
        if lang != None and config.lang == ocr_config().lang:
            language = lang
        d = pytesseract.image_to_data(
            self.origin_img.get_gray_img(), 
            output_type=Output.DICT,
            lang=language,
            config=config.config,
            timeout=config.timeout
        )
        if reset == True:
            self.boxes = []
        for i in range(len(d['text'])):
            if int(d['conf'][i]) > conf:
                if search == "":
                    self.boxes.append((d['left'][i], d['top'][i], d['width'][i], d['height'][i]))
                if search != "" and search in d['text'][i]:
                    self.boxes.append((d['left'][i], d['top'][i], d['width'][i], d['height'][i]))

    def filter_half(self, is_odd:bool = False):
        update_boxes = []
        i = 0
        while i < len(self.boxes):
            if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
                update_boxes.append(self.boxes[i])
            i += 1
        self.boxes = update_boxes

#-----------------------------------------------------------------------------------------
    # TITLE : READ AND RETURN BOX DATA

    # Show the original img image with the image of selected box (self.boxes)
    def show_boxes(self,
            rgb:list[list[int]]|list[int]|int = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ],
            title:str="boxes_img.show_boxes()"
            ) -> None:
        self.marked_img = copy.deepcopy(self.origin_img)
        c = 0
        for i in self.boxes:
            color_of_the_wind = rgb
            if isinstance(rgb,list) and isinstance(rgb[0], list):
                color_of_the_wind=rgb[c%len(rgb)]
                c+=1
            self.marked_img.rectangle(rgb=color_of_the_wind,x=i[0], y=i[1], w=i[2], h=i[3])
        self.marked_img.show(title=title)

    def print_boxes(self):
        for i in self.boxes:
            print(i)

    # Get multiple images as array of image, based on self.boxes.
    def get_imgs(self) -> list[np.ndarray]:
        out_img_arr = []
        for i in self.boxes:
            out_img = self.origin_img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img_arr.append(out_img)
        return out_img_arr

    # Save multiple images as array of image, based on self.boxes.
    def save_boxes(self,path: list[str] | str = ["img", "img_out", "jpg"]) -> None:
        count = 0
        path = get_valid_path(path)
        for i in self.boxes:
            out_img = self.origin_img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img = img_process_rgb(img = out_img)
            count_stars = str(count)
            if count < 10:
                count_stars = '0' + count_stars
            out_img.save_img(path=[path[0], path[1]+"_" + count_stars, path[2]])
            count += 1

#-----------------------------------------------------------------------------------------
    # TITLE : UTILITY

    # Sort the `self.boxes = get_contours(img)` based on x, y, width, height and size, using this function.
    '''
available `method` options
-   0 = x
-   1 = y
-   2 = width
-   3 = height
-   4 = size
    '''
    def sort_boxes(self, reverse: bool = False, method: int = 4)->None:
        self.boxes = sort_contours(contour=self.boxes, reverse=reverse, method=method)

#-----------------------------------------------------------------------------------------
    # TITLE : GET BOXES WITH THE MOST/LEAST VALUE.

    def get_largest_boxes(self, return_int:bool = False):
        y = 0
        i = 0
        while i < len(self.boxes):
            if get_box_area(self.boxes[y]) < get_box_area(self.boxes[i]):
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.boxes[y]

    def get_smallest_boxes(self, return_int:bool = False):
        y = 0
        i = 0
        while i < len(self.boxes):
            if 1/get_box_area(self.boxes[y]) < 1/get_box_area(self.boxes[i]):
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.boxes[y]

    def get_max_box(self, return_int:bool = False, mode:int = 0):
        y = 0
        i = 0
        while i < len(self.boxes):
            if self.boxes[y][mode] < self.boxes[i][mode]:
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.boxes[y]

    def get_min_box(self, return_int:bool = False, mode:int = 0):
        y = 0
        i = 0
        while i < len(self.boxes):
            if 1/self.boxes[y][mode] < 1/self.boxes[i][mode]:
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.boxes[y]

#-----------------------------------------------------------------------------------------
