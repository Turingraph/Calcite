import cv2
import numpy as np
from img_process.contour import rectangle, line
from img_process_class.img_process import img_process
from img_process.utility import rgb_img, gray_img
# https://www.reddit.com/r/vscode/comments/19eqplp/python_typing_issue_unsupported_operand_types_for/?rdt=43767
from typing import Self

class img_process_rgb(img_process):
    def __init__(self, img: Self | np.ndarray | str):
        if type(img) == Self:
            self.img:np.ndarray = np.copy(img.img)
        elif type(img) == str:
            self.img:np.ndarray = cv2.imread(filename=img)
            if self.img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            self.img:np.ndarray = rgb_img(img = img)
        else:
            raise TypeError("Error: Input must be an instance of 'img_process_rgb', a NumPy array, or a file path.")

    def get_gray_img(self):
        # https://stackoverflow.com/questions/44554125/
        # python-want-to-display-red-channel-only-in-opencv
        return gray_img(img = self.img)
    
    def get_rgb_img(self):
        return self.img

    ########################################################################################################################################################
    # img_process/contour.py

    # Note that : rgb == None means no color.
    def rectangle(self, rgb:list[int]|int|None, x:int, y:int, h:int, w:int) -> None:
        self.img = rectangle(img = self.img, rgb=rgb, x=x, y=y, w=w, h=h)

    def line(self, rgb:list[int]|int|None, x_00:int, y_00:int, x_01:int, y_01:int):
        self.img = line(img = self.img, rgb=rgb, x_00 = x_00, y_00 = y_00, x_01 = x_01, y_01 = y_01)
