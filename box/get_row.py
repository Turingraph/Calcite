from img_process.contour import sort_contours

def row_box(all_box:list[list[int]], w:int, h:int, is_double:bool = False):
    box = []
    arr = sort_contours(contour=all_box, method=1)
    for i in range(len(arr)):
        if i == 0:
            box.append((0, 0, w, arr[0][1]))
        else:
            if is_double == True:
                box.append((0, arr[i-1][1], w, arr[i-1][3]))
                box.append((0, arr[i-1][1] + arr[i-1][3], w, arr[i][1] - (arr[i-1][1] + arr[i-1][3])))
            else:
                box.append((0, arr[i-1][1], w, arr[i][1]-arr[i-1][1]))
    if len(arr) > 0:
        if is_double == True:
            box.append((0, arr[len(arr)-1][1], w, arr[len(arr)-1][3]))
            box.append((0, arr[len(arr)-1][1] + arr[len(arr)-1][3], w, h - (arr[len(arr)-1][1] + arr[len(arr)-1][3])))
        else:
            box.append((0, arr[len(arr)-1][1], w, h-arr[len(arr)-1][1]))
    return box

def row_half(all_box:list[list[int]], w:int, h:int, index:int = 0, is_double:bool = False):
    if abs(index) < len(box):
        box = []
        arr = sort_contours(contour=all_box, method=1)
        if index < 0:
            index += len(arr)
        i = 0
        while i < len(arr):
            if i == index:
                if is_double == True:
                    box.append((0, 0, w, arr[i][1]))
                    box.append((0, arr[i][1], w, arr[i][3]))
                    box.append((0, arr[i][1]+arr[i][3], w, h-(arr[i][1]+arr[i][3])))
                else:
                    box.append((0, 0, w, arr[i][1]))
                    box.append((0, arr[i][1], w, h-arr[i][1]))
                i = len(arr)
            i += 1
    return box

def col_box(all_box:list[list[int]], w:int, h:int, is_double:bool = False):
    box = []
    arr = sort_contours(contour=all_box, method=0)
    for i in range(len(arr)):
        if i == 0:
            box.append((0, 0, arr[0][0], h))
        else:
            if is_double == True:
                box.append((arr[i-1][0], 0, arr[i-1][2], h))
                box.append((arr[i-1][0] + arr[i-1][2], 0, arr[i][0] - (arr[i-1][0] + arr[i-1][2]), h))
            else:
                box.append((arr[i-1][0], 0, arr[i][0]-arr[i-1][0], h))
    if len(arr) > 0:
        if is_double == True:
            box.append((arr[len(arr)-1][0], 0, arr[len(arr)-1][2], h))
            box.append((arr[len(arr)-1][0] + arr[len(arr)-1][2], 0, w - (arr[len(arr)-1][0] + arr[len(arr)-1][2]), h))
        else:
            box.append((arr[len(arr)-1][0], 0, w-arr[len(arr)-1][0], h))
    return box

def col_half(all_box:list[list[int]], w:int, h:int, index:int = 0, is_double:bool = False):
    if abs(index) < len(box):
        box = []
        arr = sort_contours(contour=all_box, method=0)
        if index < 0:
            index += len(arr)
        i = 0
        while i < len(arr):
            if i == index:
                if is_double == True:
                    box.append((0, 0, arr[i][0], h))
                    box.append((arr[i][0], 0, arr[i][2], h))
                    box.append((arr[i][0] + arr[i][0], 0, w - (arr[i][0] + arr[i][0]), h))
                else:
                    box.append((0, 0, arr[i][0], h))
                    box.append((arr[i][0], 0, w - arr[i][0], h))
                i = len(arr)
            i += 1
    return box

def filter_half(box:list[list[int]], is_odd:bool = False):
    update_box = []
    i = 0
    while i < len(box):
        if (is_odd == True and i%2 == 1) or (is_odd == False and i%2 == 0):
            update_box.append(box[i])
        i += 1
    return update_box
