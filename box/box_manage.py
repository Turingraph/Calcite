from img_process.contour import sort_contours

'''
Purpose
-   Get row/column or the box and sort box.

Attribute

NAME        TYPE            DESCRIPTION
w           int             width of the image
h           int             height of the image
box       list[list[int]] selected and modified box.
all_box   list[list[int]] original array of box
'''

class box_manage:
    def __init__(self, 
                box: list[list[int]],
                w:int = -1,
                h:int = -1,
                ):
        self.w = w
        self.h = h 
        self.box = box
        self.all_box = box

    # Update self.box based on the row of previous self.box
    def row_box(self, is_double:bool = False):
        self.box = []
        w = self.w
        h = self.h
        arr = sort_contours(contour=self.all_box, method=1)
        for i in range(len(arr)):
            if i == 0:
                self.box.append((0, 0, w, arr[0][1]))
            else:
                if is_double == True:
                    self.box.append((0, arr[i-1][1], w, arr[i-1][3]))
                    self.box.append((0, arr[i-1][1] + arr[i-1][3], w, arr[i][1] - (arr[i-1][1] + arr[i-1][3])))
                else:
                    self.box.append((0, arr[i-1][1], w, arr[i][1]-arr[i-1][1]))
        if len(arr) > 0:
            if is_double == True:
                self.box.append((0, arr[len(arr)-1][1], w, arr[len(arr)-1][3]))
                self.box.append((0, arr[len(arr)-1][1] + arr[len(arr)-1][3], w, h - (arr[len(arr)-1][1] + arr[len(arr)-1][3])))
            else:
                self.box.append((0, arr[len(arr)-1][1], w, h-arr[len(arr)-1][1]))

    # Update self.box as 2 parts, based on the index-th row of previous self.box
    def row_half(self, index:int = 0, is_double:bool = False):
        if abs(index) < len(self.box):
            self.box = []
            w = self.w
            h = self.h
            arr = sort_contours(contour=self.all_box, method=1)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    if is_double == True:
                        self.box.append((0, 0, w, arr[i][1]))
                        self.box.append((0, arr[i][1], w, arr[i][3]))
                        self.box.append((0, arr[i][1]+arr[i][3], w, h-(arr[i][1]+arr[i][3])))
                    else:
                        self.box.append((0, 0, w, arr[i][1]))
                        self.box.append((0, arr[i][1], w, h-arr[i][1]))
                    i = len(arr)
                i += 1

    # Update self.box based on the column of previous self.box
    def col_box(self, is_double:bool = False):
        self.box = []
        w = self.w
        h = self.h
        # don't forget to add parameter name because
        # arr = sort_contours(self.box, 0) is not working
        arr = sort_contours(contour=self.all_box, method=0)
        for i in range(len(arr)):
            if i == 0:
                self.box.append((0, 0, arr[0][0], h))
            else:
                if is_double == True:
                    self.box.append((arr[i-1][0], 0, arr[i-1][2], h))
                    self.box.append((arr[i-1][0] + arr[i-1][2], 0, arr[i][0] - (arr[i-1][0] + arr[i-1][2]), h))
                else:
                    self.box.append((arr[i-1][0], 0, arr[i][0]-arr[i-1][0], h))
        if len(arr) > 0:
            if is_double == True:
                self.box.append((arr[len(arr)-1][0], 0, arr[len(arr)-1][2], h))
                self.box.append((arr[len(arr)-1][0] + arr[len(arr)-1][2], 0, w - (arr[len(arr)-1][0] + arr[len(arr)-1][2]), h))
            else:
                self.box.append((arr[len(arr)-1][0], 0, w-arr[len(arr)-1][0], h))
        self.box = self.box

    # Update self.box as 2 parts, based on the index-th column of previous self.box
    def col_half(self, index:int = 0, is_double:bool = False):
        if abs(index) < len(self.box):
            self.box = []
            w = self.w
            h = self.h
            arr = sort_contours(contour=self.all_box, method=0)
            if index < 0:
                index += len(arr)
            i = 0
            while i < len(arr):
                if i == index:
                    if is_double == True:
                        self.box.append((0, 0, arr[i][0], h))
                        self.box.append((arr[i][0], 0, arr[i][2], h))
                        self.box.append((arr[i][0] + arr[i][0], 0, w - (arr[i][0] + arr[i][0]), h))
                    else:
                        self.box.append((0, 0, arr[i][0], h))
                        self.box.append((arr[i][0], 0, w - arr[i][0], h))
                    i = len(arr)
                i += 1
            self.box = self.box

    def filter_half(self, is_odd:bool = False):
        update_box = []
        i = 0
        while i < len(self.box):
            if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
                update_box.append(self.box[i])
            i += 1
        self.box = update_box

    def sort_box(self, reverse: bool = False, method: int = 4)->None:
        self.box = sort_contours(contour=self.box, reverse=reverse, method=method)

    def get_box(self):
        return self.box
