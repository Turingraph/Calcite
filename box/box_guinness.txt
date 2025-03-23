from img_process.contour import get_box_area

'''
Purpose
-   Return the largest, smallest, topmost, buttonmost or other box that have specific property.

Attribute

NAME        TYPE            DESCRIPTION
all_box   list[list[int]] original array of box
'''

class box_guinness:
    def __init__(self, 
                box:list[list[int]]):
        self.box = box

    def get_largest_box(self, return_int:bool = False):
        y = 0
        i = 0
        while i < len(self.box):
            if get_box_area(self.box[y]) < get_box_area(self.box[i]):
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.box[y]

    def get_smallest_box(self, return_int:bool = False):
        y = 0
        i = 0
        while i < len(self.box):
            if 1/get_box_area(self.box[y]) < 1/get_box_area(self.box[i]):
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.box[y]
    
    """
    mode
    0 = left to right
    1 = top to button
    2 = width
    3 = height
    """
    def get_max_box(self, return_int:bool = False, mode:int = 0):
        y = 0
        i = 0
        while i < len(self.box):
            if self.box[y][mode] < self.box[i][mode]:
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.box[y]

    def get_min_box(self, return_int:bool = False, mode:int = 0):
        y = 0
        i = 0
        while i < len(self.box):
            if 1/self.box[y][mode] < 1/self.box[i][mode]:
                y = i 
            i += 1
        if return_int == True:
            return y
        return self.box[y]
