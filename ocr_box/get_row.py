from collections import deque
from img_process.contour import sort_contours

def row_box(all_box:deque[tuple[int]]|list[tuple[int]], w:int, h:int, is_double:bool = False)->deque:
    # time : O(n) + O(n * log(n))
    # space: O(n)
    box = deque()
    # There is no way to sort deque with O(1) space in Python
    # Because Python focus on user friendly over optimization.
    arr = deque(sort_contours(contour=all_box, method=1))
    prev = None
    if len(arr) > 0:
        prev = arr[0]
        box.append((0, 0, w, arr[0][1]))
        arr.popleft()
    while len(arr) > 0:
        if is_double == True:
            box.append((0, prev[1], w, prev[3]))
            box.append((0, prev[1] + prev[3], w, arr[0][1] - (prev[1] + prev[3])))
        else:
            box.append((0, prev[1], w, arr[0][1]-prev[1]))
        prev = arr[0]
        arr.popleft()
    if prev != None:
        if is_double == True:
            box.append((0, prev[1], w, prev[3]))
            box.append((0, prev[1] + prev[3], w, h - (prev[1] + prev[3])))
        else:
            box.append((0, prev[1], w, h-prev[1]))
    return box

def row_half(all_box:deque[tuple[int]]|list[tuple[int]], w:int, h:int, index:int = 0, is_double:bool = False, is_sort:bool = True)->deque:
    # time : O(n) + O(n * log(n))
    # space: O(1)
    box = deque()
    if abs(index) < len(all_box):
        arr = all_box
        if is_sort == True:
            arr = deque(sort_contours(contour=all_box, method=1))
        if is_double == True:
            box.append((0, 0, w, arr[index][1]))
            box.append((0, arr[index][1], w, arr[index][3]))
            box.append((0, arr[index][1]+arr[index][3], w, h-(arr[index][1]+arr[index][3])))
        else:
            box.append((0, 0, w, arr[index][1]))
            box.append((0, arr[index][1], w, h-arr[index][1]))
    return box

def col_box(all_box:deque[tuple[int]]|list[tuple[int]], w:int, h:int, is_double:bool = False)->deque:
    # time : O(n) + O(n * log(n))
    # space: O(n)
    box = deque()
    arr = deque(sort_contours(contour=all_box, method=0))
    prev = None
    if len(arr) > 0:
        prev = arr[0]
        box.append((0, 0, arr[0][0], h))
        arr.popleft()
    while len(arr) > 0:
        if is_double == True:
            box.append((prev[0], 0, prev[2], h))
            box.append((prev[0] + prev[2], 0, arr[0][0] - (prev[0] + prev[2]), h))
        else:
            box.append((prev[0], 0, arr[0][0]-prev[0], h))
        prev = arr[0]
        arr.popleft()
    if prev != None:
        if is_double == True:
            box.append((prev[0], 0, prev[2], h))
            box.append((prev[0] + prev[2], 0, w - (prev[0] + prev[2]), h))
        else:
            box.append((prev[0], 0, w - prev[0], h))
    return box

def col_half(all_box:deque[tuple[int]]|list[tuple[int]], w:int, h:int, index:int = 0, is_double:bool = False, is_sort:bool = True)->deque:
    # time : O(n) + O(n * log(n))
    # space: O(1)
    box = deque()
    if abs(index) < len(all_box):
        arr = all_box
        if is_sort == True:
            arr = sort_contours(contour=all_box, method=0)
        if is_double == True:
            box.append((0, 0, arr[index][0], h))
            box.append((arr[index][0], 0, arr[index][2], h))
            box.append((arr[index][0] + arr[index][2], 0, w - (arr[index][0] + arr[index][0]), h))
        else:
            box.append((0, 0, arr[index][0], h))
            box.append((arr[index][0], 0, w - arr[index][0], h))
    return box

def filter_half(box:deque[tuple[int]]|list[tuple[int]], is_odd:bool = False)->deque:
    # time : O(n)
    # space: O(n)
    update_box = deque()
    i = 0
    box = list(box)
    while i < len(box):
        if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
            update_box.append(box[i])
        i += 1
    return update_box

def add_area(box:deque[tuple[int]]|list[tuple[int]], area:int,max:int, mode:int = 0, index:int = 0)->None:
    # time : O(n) for deque. O(1) for list
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
