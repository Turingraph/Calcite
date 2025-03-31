from collections import deque
import cv2
import numpy as np

from img_process.contour import sort_contours
from img_process.show import get_valid_path
from img_process.utility import check_img, rgb_img
from img_process_class.img_process_rgb import img_process_rgb
from utility.utility import index_name

'''
Purpose
-	View and save image.

Attribute

NAME	TYPE				UPDATE_METHOD	DESCRIPTION
img		np.ndarray			update_img()	image input
box		list[tuple[int]]		-			box around the given region.
'''

class box_read:
    def __init__(self, 
                img: np.ndarray | str,
                box: deque):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be np.ndarray or str")
        self.__img:img_process_rgb = img_process_rgb(img = rgb_img(img))
        self.__box = box

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET PRIVATE ATTRIBUTE AS READ ONLY VARIABLE.

    def get_box(self)->deque:
        # time : O(1)
        # space: O(1)        
        return self.__box
    
    def get_img(self) -> np.ndarray:
        # time : O(1)
        # space: O(1)
        return self.__img.img

#-----------------------------------------------------------------------------------------
    # PURPOSE : SORT BOX

    def sort_box(self, reverse: bool = False, method: int = 4)->None:
        # time : O(n * log(n))
        # space: O(n)
        self.__box = deque(sort_contours(contour=self.__box, reverse=reverse, method=method))

#-----------------------------------------------------------------------------------------
    # PURPOSE : DISPLAY IMAGE DATA

    def color_img(self,
            rgb:list[tuple[int]]|tuple[int]|int|None = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ],
            ) -> None:
        # time : O(n)
        # space: O(1)
        c = 0
        if rgb != None:
            for i in self.__box:
                color_of_the_wind = rgb
                if isinstance(rgb,list) and isinstance(rgb[0], list):
                    color_of_the_wind=rgb[c%len(rgb)]
                    c+=1
                self.__img.rectangle(rgb=color_of_the_wind,x=i[0], y=i[1], w=i[2], h=i[3])

    def show_img(
            self, 
            title:str="img_out",
            rgb:list[tuple[int]]|tuple[int]|int|None = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ])->None:
        # time : O(1) + O(n)
        # space: O(1)
        if rgb != None:
            self.color_img(rgb = rgb)
        self.__img.show(title=title)

    def save_img(
            self,
            path:str|list[str]|tuple[str] = ["img","img_out","jpg"],
            rgb:list[tuple[int]]|tuple[int]|int|None = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ]) -> None:
        # time : O(1) + O(n)
        # space: O(1)
        if rgb != None:
            self.color_img(rgb = rgb)
        self.__img.save_img(path=path)

#-----------------------------------------------------------------------------------------
    # PURPOSE : DISPLAY IMAGE DATA ARRAY BASED ON self.box

    def get_imgarr(self) -> list[np.ndarray]:
        out_img_arr = []
        for i in self.__box:
            out_img = self.__img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img_arr.append(out_img)
        return out_img_arr

    def save_imgarr(
            self,
            path: list[str] | str | tuple[str] = ["img", "img_out", "jpg"],
            rgb:list[tuple[int]]|tuple[int]|int|None = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ]) -> None:
        # time : O(1) + O(n)
        # space: O(1)
        count = 0
        path = get_valid_path(path)
        if rgb != None:
            self.color_img(rgb = rgb)
        for i in self.__box:
            out_img = self.__img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img = img_process_rgb(img = out_img)
            out_img.save_img(path=[path[0], path[1]+"_" + index_name(count), path[2]])
            count += 1

    def save_sub_img(
            self,
            path:str|list[str] = ["img","img_out","jpg"],
            rgb:list[tuple[int]]|tuple[int]|int|None = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ],
            index:int = 0
            ) -> None:
        # time : O(n)
        # space: O(n)
        if rgb != None:
            self.color_img(rgb = rgb)
        if abs(index) < len(self.__box):
            if index < 0:
                index += len(self.__box)
            img_process_rgb(img = self.get_imgarr()[index]).save_img(path = path)

#-----------------------------------------------------------------------------------------
