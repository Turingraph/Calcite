import cv2
import numpy as np
from img_process.show import get_valid_path
from img_process.utility import check_img, rgb_img
from include.img_process_rgb import img_process_rgb
from utility.utility import index_name
from box.box_guinness import box_guinness
from box.box_manage import box_manage
from img_process.contour import sort_contours

'''
Purpose
-	View and save image.

Attribute

NAME	TYPE				UPDATE_METHOD	DESCRIPTION
img		np.ndarray			update_img()	image input
box		list[list[int]]		-				box around the given region.
'''

class img_view:
    def __init__(self, 
                img: np.ndarray | str,
                box: list[list[int]]):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be np.ndarray or str")
        self.img:img_process_rgb = img_process_rgb(img = rgb_img(img))
        self.box = box
#-----------------------------------------------------------------------------------------
    # PURPOSE : DISPLAY AND GET IMAGE DATA

    # Draw box in the image. It is recommended to use update_img() before show_img() and save_img() 
    # to see the box in the image.
    def update_img(self,
            rgb:list[list[int]]|list[int]|int = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ],
            ) -> None:
        c = 0
        for i in self.box:
            color_of_the_wind = rgb
            if isinstance(rgb,list) and isinstance(rgb[0], list):
                color_of_the_wind=rgb[c%len(rgb)]
                c+=1
            self.img.rectangle(rgb=color_of_the_wind,x=i[0], y=i[1], w=i[2], h=i[3])
    
    def show_img(self, title:str="img_out"):
        self.img.show(title=title)

    # Save one image.
    def save_img(self,path:str|list[str] = ["img","img_out","jpg"]) -> None:
        self.img.save_img(path=path)

    def print_box(self):
        for i in self.box:
            print(i)

    # Get multiple images as array of image, based on self.box.
    def get_imgs(self) -> list[np.ndarray]:
        out_img_arr = []
        for i in self.box:
            out_img = self.img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img_arr.append(out_img)
        return out_img_arr

    # Save multiple images as array of image, based on self.box.
    def save_box(self,path: list[str] | str = ["img", "img_out", "jpg"]) -> None:
        count = 0
        path = get_valid_path(path)
        for i in self.box:
            out_img = self.img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img = img_process_rgb(img = out_img)
            out_img.save_img(path=[path[0], path[1]+"_" + index_name(count), path[2]])
            count += 1

    # Return image in np.ndarray data type.
    def get_img(self) -> np.ndarray:
        return self.img.img

    def get_box(self):
        return self.box

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET BOXES DATA

    def get_box_guinness(self):
        return box_guinness(box = self.box)
    
    def get_box_manage(self):
        return box_manage(box = self.box)

    def sort_box(self, reverse: bool = False, method: int = 4)->None:
        self.box = sort_contours(contour=self.box, reverse=reverse, method=method)

#-----------------------------------------------------------------------------------------
