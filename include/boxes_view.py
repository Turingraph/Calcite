import cv2
import numpy as np
from img_process.show import get_valid_path
from img_process.utility import check_img, rgb_img
from include.img_process_rgb import img_process_rgb

'''
Purpose
-	View and save image.

Attribute

NAME		TYPE				UPDATE_METHOD	DESCRIPTION
img			np.ndarray			update_img()	image input
boxes		list[list[int]]		-				box around the given region.
'''

class boxes_view:
    def __init__(self, 
                img: np.ndarray | str,
                boxes: list[list[int]]):
        if type(img) == str:
            img:np.ndarray = cv2.imread(filename=img)
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be img_process, np.ndarray or str")
        self.img:img_process_rgb = img_process_rgb(img = rgb_img(img))
        self.boxes = boxes

    # Draw boxes in the image. It is recommended to use update_img() before show_img() and save_img() 
    # to see the box in the image.
    def update_img(self,
            rgb:list[list[int]]|list[int]|int = [
                [255,0,0],
                [0,255,0],
                [0,0,255]
            ],
            ) -> None:
        c = 0
        for i in self.boxes:
            color_of_the_wind = rgb
            if isinstance(rgb,list) and isinstance(rgb[0], list):
                color_of_the_wind=rgb[c%len(rgb)]
                c+=1
            self.img.rectangle(rgb=color_of_the_wind,x=i[0], y=i[1], w=i[2], h=i[3])
    
    def show_img(self, title:str="img_out"):
        self.img.show(title=title)

    def save_img(self,path:str|list[str] = ["img","img_out","jpg"]) -> None:
        self.img.save_img(path=path)

    def print_boxes(self):
        for i in self.boxes:
            print(i)

    # Get multiple images as array of image, based on self.boxes.
    def get_imgs(self) -> list[np.ndarray]:
        out_img_arr = []
        for i in self.boxes:
            out_img = self.img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img_arr.append(out_img)
        return out_img_arr

    # Save multiple images as array of image, based on self.boxes.
    def save_boxes(self,path: list[str] | str = ["img", "img_out", "jpg"]) -> None:
        count = 0
        path = get_valid_path(path)
        for i in self.boxes:
            out_img = self.img.img[i[1]:i[1]+i[3], i[0]:i[0]+i[2]]
            out_img = img_process_rgb(img = out_img)
            count_stars = str(count)
            if count < 10:
                count_stars = '0' + count_stars
            out_img.save_img(path=[path[0], path[1]+"_" + count_stars, path[2]])
            count += 1
