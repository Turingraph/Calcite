from img_process.contour import sort_contours

"""
We consider list.append use O(1) time as amortized time complexity instead of worse time complexity.
-   https://stackoverflow.com/questions/33044883/why-is-the-time-complexity-of-pythons-list-append-method-o1

It is recommended to use list over list in most case unless you have to append item at both the beginning and the end of the list.
So we change list to list back.
-   https://www.reddit.com/r/learnpython/comments/7mmenq/use_deque_instead_of_list_always/
"""

def row_box(all_box:list[tuple[int]], w:int, h:int, is_double:bool = False)->list:
    # time : O(n) + O(n * log(n))
    # space: O(n)
    box = []
    all_box = sort_contours(contour=all_box, method=1)
    if len(all_box) > 0:
        for i in range(len(all_box) + 1):
            if i == 0:
                box.append((0, 0, w, all_box[i][1]))
            elif i == len(all_box):
                last = all_box[i - 1]
                if is_double == True:
                    box.append((0, last[1], w, last[3]))
                    box.append((0, last[1] + last[3], w, h - (last[1] + last[3])))
                else:
                    box.append((0, last[1], w, h - last[1]))
            else:
                prev = all_box[i-1]
                item = all_box[i]
                if is_double == True:
                    box.append((0, prev[1], w, prev[3]))
                    box.append((0, prev[1] + prev[3], w, item[1] - (prev[1] + prev[3])))
                else:
                    box.append((0, prev[1], w, item[1] - prev[1]))
    return box

def row_half(all_box:list[tuple[int]], w:int, h:int, index:int = 0, is_double:bool = False, is_sort:bool = True)->list:
    # time : O(1) + O(n * log(n))
    # space: O(1)
    box = []
    if abs(index) < len(all_box):
        if is_sort == True:
            all_box = sort_contours(contour=all_box, method=1)
        if is_double == True:
            box.append((0, 0, w, all_box[index][1]))
            box.append((0, all_box[index][1], w, all_box[index][3]))
            box.append((0, all_box[index][1] + all_box[index][3], w, h - (all_box[index][1] + all_box[index][3])))
        else:
            box.append((0, 0, w, all_box[index][1]))
            box.append((0, all_box[index][1], w, h - all_box[index][1]))
    return box

def col_box(all_box:list[tuple[int]], w:int, h:int, is_double:bool = False)->list:
    # time : O(n) + O(n * log(n))
    # space: O(n)
    # time : O(n) + O(n * log(n))
    # space: O(n)
    box = []
    all_box = sort_contours(contour=all_box, method=1)
    for i in range(len(all_box) + 1):
        if i == 0:
            box.append((0, 0, all_box[i][0], h))
        elif i == len(all_box):
            last = all_box[i - 1]
            if is_double == True:
                box.append((last[0], 0, last[2], h))
                box.append((last[0] + last[2], 0, w - (last[0] + last[2]), h))
            else:
                box.append((last[0], 0, w - last[0], h))
        else:
            prev = all_box[i-1]
            item = all_box[i]
            if is_double == True:
                box.append((prev[0], 0, prev[2], h))
                box.append((prev[0] + prev[2], 0, item[0] - (prev[0] + prev[2]), h))
            else:
                box.append((prev[0], 0, item[0] - prev[0], h))
    return box

def col_half(all_box:list[tuple[int]], w:int, h:int, index:int = 0, is_double:bool = False, is_sort:bool = True)->list:
    # time : O(1) + O(n * log(n))
    # space: O(1)
    box = []
    if abs(index) < len(all_box):
        if is_sort == True:
            all_box = sort_contours(contour=all_box, method=0)
        if is_double == True:
            box.append((0, 0, all_box[index][0], h))
            box.append((all_box[index][0], 0, all_box[index][2], h))
            box.append((all_box[index][0] + all_box[index][2], 0, w - (all_box[index][0] + all_box[index][0]), h))
        else:
            box.append((0, 0, all_box[index][0], h))
            box.append((all_box[index][0], 0, w - all_box[index][0], h))
    return box

def filter_half(box:list[tuple[int]], is_odd:bool = False)->list:
    # time : O(n)
    # space: O(n)
    update_box = []
    i = 0
    box = list(box)
    while i < len(box):
        if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
            update_box.append(box[i])
        i += 1
    return update_box

def add_area(box:list[tuple[int]], area:int, max:int, mode:int = 0, index:int = 0)->None:
    # time : O(1)
    # space: O(1)
    if abs(index) < len(box):
        if (
            (box[index][mode] + area < max) and 
            (box[index][mode] + area > 0) and 
            (mode in [0, 1])
            ):
            prev = list(box[index])
            prev[mode] = area + box[index][mode]
            box[index] = tuple(prev)
        if (
            (box[index][mode] + box[index][mode-2] + area < max) and 
            (box[index][mode] + box[index][mode-2] + area > 0) and 
            (mode in [2, 3])
            ):
            prev = list(box[index])
            prev[mode] = area + box[index][mode]
            box[index] = tuple(prev)
