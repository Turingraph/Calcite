from img_process.contour import sort_contours

'''
Purpose
-   Get row/column or the boxes and sort boxes.

Attribute

NAME        TYPE            DESCRIPTION
w           int             width of the image
h           int             height of the image
boxes       list[list[int]] selected and modified boxes.
all_boxes   list[list[int]] original array of boxes
'''

class boxes_manage:
    def __init__(self, 
                boxes: list[list[int]],
                w:int = -1,
                h:int = -1,
                ):
        self.w = w
        self.h = h 
        self.boxes = []
        self.all_boxes = boxes

    # Update self.boxes based on the row of previous self.boxes
    def row_boxes(self, is_double:bool = False):
        self.boxes = []
        w = self.w
        h = self.h
        arr = sort_contours(contour=self.all_boxes, method=1)
        for i in range(len(arr)):
            if i == 0:
                self.boxes.append((0, 0, w, arr[0][1]))
            else:
                if is_double == True:
                    self.boxes.append((0, arr[i-1][1], w, arr[i-1][3]))
                    self.boxes.append((0, arr[i-1][1] + arr[i-1][3], w, arr[i][1] - (arr[i-1][1] + arr[i-1][3])))
                else:
                    self.boxes.append((0, arr[i-1][1], w, arr[i][1]-arr[i-1][1]))
        if len(arr) > 0:
            if is_double == True:
                self.boxes.append((0, arr[len(arr)-1][1], w, arr[len(arr)-1][3]))
                self.boxes.append((0, arr[len(arr)-1][1] + arr[len(arr)-1][3], w, h - (arr[len(arr)-1][1] + arr[len(arr)-1][3])))
            else:
                self.boxes.append((0, arr[len(arr)-1][1], w, h-arr[len(arr)-1][1]))

    # Update self.boxes as 2 parts, based on the index-th row of previous self.boxes
    def row_half(self, index:int = 0, is_double:bool = False):
        if abs(index) < len(self.boxes):
            self.boxes = []
            w = self.w
            h = self.h
            arr = sort_contours(contour=self.all_boxes, method=1)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    if is_double == True:
                        self.boxes.append((0, 0, w, arr[i][1]))
                        self.boxes.append((0, arr[i][1], w, arr[i][3]))
                        self.boxes.append((0, arr[i][1]+arr[i][3], w, h-(arr[i][1]+arr[i][3])))
                    else:
                        self.boxes.append((0, 0, w, arr[i][1]))
                        self.boxes.append((0, arr[i][1], w, h-arr[i][1]))
                    i = len(arr)
                i += 1

    # Update self.boxes based on the column of previous self.boxes
    def col_boxes(self, is_double:bool = False):
        self.boxes = []
        w = self.w
        h = self.h
        # don't forget to add parameter name because
        # arr = sort_contours(self.boxes, 0) is not working
        arr = sort_contours(contour=self.all_boxes, method=0)
        for i in range(len(arr)):
            if i == 0:
                self.boxes.append((0, 0, arr[0][0], h))
            else:
                if is_double == True:
                    self.boxes.append((arr[i-1][0], 0, arr[i-1][2], h))
                    self.boxes.append((arr[i-1][0] + arr[i-1][2], 0, arr[i][0] - (arr[i-1][0] + arr[i-1][2]), h))
                else:
                    self.boxes.append((arr[i-1][0], 0, arr[i][0]-arr[i-1][0], h))
        if len(arr) > 0:
            if is_double == True:
                self.boxes.append((arr[len(arr)-1][0], 0, arr[len(arr)-1][2], h))
                self.boxes.append((arr[len(arr)-1][0] + arr[len(arr)-1][2], 0, w - (arr[len(arr)-1][0] + arr[len(arr)-1][2]), h))
            else:
                self.boxes.append((arr[len(arr)-1][0], 0, w-arr[len(arr)-1][0], h))
        self.boxes = self.boxes

    # Update self.boxes as 2 parts, based on the index-th column of previous self.boxes
    def col_half(self, index:int = 0, is_double:bool = False):
        if abs(index) < len(self.boxes):
            self.boxes = []
            w = self.w
            h = self.h
            arr = sort_contours(contour=self.all_boxes, method=0)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    if is_double == True:
                        self.boxes.append((0, 0, arr[i][0], h))
                        self.boxes.append((arr[i][0], 0, arr[i][2], h))
                        self.boxes.append((arr[i][0] + arr[i][0], 0, w - (arr[i][0] + arr[i][0]), h))
                    else:
                        self.boxes.append((0, 0, arr[i][0], h))
                        self.boxes.append((arr[i][0], 0, w - arr[i][0], h))
                    i = len(arr)
                i += 1
            self.boxes = self.boxes

    def filter_half(self, is_odd:bool = False):
        update_boxes = []
        i = 0
        while i < len(self.boxes):
            if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
                update_boxes.append(self.boxes[i])
            i += 1
        self.boxes = update_boxes

    def sort_boxes(self, reverse: bool = False, method: int = 4)->None:
        self.boxes = sort_contours(contour=self.boxes, reverse=reverse, method=method)

    def get_boxes(self):
        return self.boxes
