import cv2
import numpy as np
from include.img_process import img_process
from img_process.utility import rgb_img, gray_img
# https://www.reddit.com/r/vscode/comments/19eqplp/python_typing_issue_unsupported_operand_types_for/?rdt=43767
from typing import Self

class img_process_rgb(img_process):
    def __init__(self, img: Self | np.ndarray | str):
        if type(img) == Self:
            self.img = np.copy(img.img)
        elif type(img) == str:
            self.img = cv2.imread(filename=img)
            if self.img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            self.img = rgb_img(img = img)
        else:
            raise TypeError("Error: Input must be an instance of 'img_process_rgb', a NumPy array, or a file path.")

    def get_gray_img(self):
        return gray_img(img = self.img)
    
    def get_rgb_img(self):
        return self.img
