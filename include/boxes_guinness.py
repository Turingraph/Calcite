from img_process.contour import get_box_area

'''
Purpose
-   Return the largest, smallest, topmost, buttonmost or other box that have specific property.

Attribute

NAME        TYPE            DESCRIPTION
all_boxes   list[list[int]] original array of boxes
'''

class boxes_guinness:
    def __init__(self, 
                boxes:list[list[int]]):
        self.boxes = boxes

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
