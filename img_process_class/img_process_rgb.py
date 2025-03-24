import cv2
import numpy as np
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

    def get_gray_img(self, mode:int = 3):
        # https://stackoverflow.com/questions/44554125/
        # python-want-to-display-red-channel-only-in-opencv
        match mode:
            case 0:
                self.img[:, :, 0] = 0
                self.img[:, :, 1] = 0
                return gray_img(img = self.img)
            case 1:
                self.img[:, :, 1] = 0
                self.img[:, :, 2] = 0
                return gray_img(img = self.img)
            case 2:
                self.img[:, :, 2] = 0
                self.img[:, :, 0] = 0
                return gray_img(img = self.img)
            case 3:
                return gray_img(img = self.img)
            case default:
                return gray_img(img = self.img)
    
    def get_rgb_img(self):
        return self.img
