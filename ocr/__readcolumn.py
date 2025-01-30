import sys

ImageProcessingPath = "/Users/imac/Desktop/JOCR_SOBA/ImageProcessing"
sys.path.insert(1, ImageProcessingPath)

import Contour as tour
import ReadText as read
import cv2
import numpy as np
from TextUtility import Path2Image
from GrayImage import ColorImage
import ShowImage as show
from ColumnSegmentation import ColumnSegmentation


def Width_and_Height_Warning(width_and_height, function_name):
    print()
    print("WARNING: Input width_and_height is invalid.")
    print("Type of width_and_height should have one out of 2 properties")
    print(
        "1. Type of width_and_height[0][0] and width_and_height[0][1] should be real number."
    )
    print(
        "2. Type of width_and_height[0] and width_and_height[1] should be real number."
    )
    print("width_and_height =", width_and_height)
    print("Reported by PytesseractCommand / ReadColumn.py / def", function_name)
    print(
        "Reported by PytesseractCommand / ReadColumn.py / def Width_and_Height_Warning"
    )


def PrintTextOutput(is_show, output_text, function_name):
    if is_show == True:
        print()
        print("Output Text")
        print(output_text)
        print(
            "Reported by PytesseractCommand / ReadColumn.py / def",
            function_name,
        )
        print(
            "Reported by PytesseractCommand / ReadColumn.py / def PrintTextOutput"
        )


def PrintTextOutput02(is_show, function_name):
    if is_show == True:
        print()
        print(
            "Reported by PytesseractCommand / ReadColumn.py / def",
            function_name,
        )
        print(
            "Reported by PytesseractCommand / ReadColumn.py / def PrintTextOutput02"
        )


def ShapeOfWidthHeightList(ls):
    # https://stackoverflow.com/questions/37357798/how-to-check-if-all-items-in-list-are-string
    if isinstance(ls, list):
        if all(isinstance(item, (int, float)) for item in ls):
            if len(ls) == 2:
                ls.extend([None, None])
                return (ls, 0, True)
            elif len(ls) == 3:
                ls.append(None)
                return (ls, 0, True)
            elif len(ls) >= 4:
                return (ls, 0, True)
            else:
                return (ls, 0, False)
        else:
            absolate_truth = all(isinstance(item, list) for item in ls)
            if absolate_truth == True:
                for i in ls:
                    if len(i) == 3:
                        i.append(None)
                    if len(i) == 2:
                        i.extend([None, None])
                    if len(i) < 2:
                        return (ls, 0, False)
                    if not isinstance(i[0], (int, float)) and not isinstance(
                        i[1], (int, float)
                    ):
                        return (ls, 0, False)
                return (ls, 1, True)
            else:
                return (ls, 0, False)
    else:
        return (ls, 0, False)


def MultiSplit(ls, text):
    # https://stackoverflow.com/questions/4998629/split-string-with-multiple-delimiters-in-python
    for i in ls:
        text = text.replace(str(i), ls[0])
    text = text.split(ls[0])
    return text


########################################################################################################################################################


def GetColumnText(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    column_format="\n",
):
    img = Path2Image(img)
    sub_imgs = ColumnSegmentation(
        img=img,
        width=width,
        height=height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        is_return_img_ls=True,
    )
    ls = []
    for sub_img in sub_imgs:
        output = read.GetImgText(sub_img)
        ls.append(output)
    if type(column_format) == str:
        output_text = column_format.join(ls)
    elif isinstance(column_format, (int, float)):
        output_text = str(column_format).join(ls)
    else:
        output_text = ls
    PrintTextOutput(is_show, output_text, function_name="GetColumnText")
    return output_text


def SaveColumnText(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    column_format="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetColumnText(
        img,
        width,
        height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        column_format=column_format,
    )
    PrintTextOutput02(is_show, function_name="SaveColumnText")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )


########################################################################################################################################################


def GetMultiColumnText(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    column_format="\n",
    meta_column_format="\n",
):
    img = Path2Image(img)
    output_text = ""
    shape_of_ls = ShapeOfWidthHeightList(width_and_height)
    width_and_height = shape_of_ls[0]
    mode = shape_of_ls[1]
    is_input_valid = shape_of_ls[2]
    if is_input_valid == False:
        Width_and_Height_Warning(width_and_height, "GetMultiColumnText")
        return output_text
    else:
        if mode == 0:
            output_text = GetColumnText(
                img,
                width_and_height[0],
                width_and_height[1],
                max_width=width_and_height[2],
                max_height=width_and_height[3],
                dilate_img=dilate_img,
                threshold_px=threshold_px,
                kernel=kernel,
                kernel_area=kernel_area,
                is_binary_inv=is_binary_inv,
                is_otsu=is_otsu,
                is_show=is_show,
                column_format=column_format,
            )
        if mode == 1:
            for wh in width_and_height:
                sub_text = GetColumnText(
                    img,
                    wh[0],
                    wh[1],
                    max_width=wh[2],
                    max_height=wh[3],
                    dilate_img=dilate_img,
                    threshold_px=threshold_px,
                    kernel=kernel,
                    kernel_area=kernel_area,
                    is_binary_inv=is_binary_inv,
                    is_otsu=is_otsu,
                    is_show=is_show,
                    column_format=column_format,
                )
                output_text += sub_text
                output_text += meta_column_format
        PrintTextOutput(
            is_show, output_text=output_text, function_name="GetMultiColumnText"
        )
        return output_text


def SaveMultiColumnText(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    column_format="\n",
    meta_column_format="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetMultiColumnText(
        img=img,
        width_and_height=width_and_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        column_format=column_format,
        meta_column_format=meta_column_format,
    )
    PrintTextOutput02(is_show, function_name="SaveMultiColumnText")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )


########################################################################################################################################################


def GetStringArray(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
):
    img = Path2Image(img)
    sub_imgs = ColumnSegmentation(
        img=img,
        width=width,
        height=height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        is_return_img_ls=True,
    )
    ls = []
    for sub_img in sub_imgs:
        output = read.GetImgText(sub_img)
        if isinstance(separators, list):
            output = MultiSplit(separators, output)
        else:
            output = output.split(separators)
        ls.extend(output)
    PrintTextOutput(is_show, output_text=ls, function_name="GetStringArray")
    return ls


def SaveStringArray(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetStringArray(
        img=img,
        width=width,
        height=height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        separators=separators,
    )
    PrintTextOutput02(is_show, function_name="SaveStringArray")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )


########################################################################################################################################################


def GetMultiStringArray(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
):
    img = Path2Image(img)
    ls = []
    shape_of_ls = ShapeOfWidthHeightList(width_and_height)
    width_and_height = shape_of_ls[0]
    mode = shape_of_ls[1]
    is_input_valid = shape_of_ls[2]
    if is_input_valid == False:
        Width_and_Height_Warning(width_and_height, "GetMultiColumnText")
        return ls
    else:
        if mode == 0:
            ls = GetStringArray(
                img,
                width_and_height[0],
                width_and_height[1],
                max_width=width_and_height[2],
                max_height=width_and_height[3],
                dilate_img=dilate_img,
                threshold_px=threshold_px,
                kernel=kernel,
                kernel_area=kernel_area,
                is_binary_inv=is_binary_inv,
                is_otsu=is_otsu,
                is_show=is_show,
                separators=separators,
            )
        if mode == 1:
            for wh in width_and_height:
                sub_text = GetStringArray(
                    img,
                    wh[0],
                    wh[1],
                    max_width=wh[2],
                    max_height=wh[3],
                    dilate_img=dilate_img,
                    threshold_px=threshold_px,
                    kernel=kernel,
                    kernel_area=kernel_area,
                    is_binary_inv=is_binary_inv,
                    is_otsu=is_otsu,
                    is_show=is_show,
                    separators=separators,
                )
                ls.extend(sub_text)
        PrintTextOutput(
            is_show, output_text=ls, function_name="GetMultiStringArray"
        )
        return ls


def SaveMultiStringArray(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetMultiStringArray(
        img=img,
        width_and_height=width_and_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        separators=separators,
    )
    PrintTextOutput02(is_show, function_name="SaveMultiStringArray")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )


########################################################################################################################################################


def GetStringTable(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
):
    img = Path2Image(img)
    sub_imgs = ColumnSegmentation(
        img=img,
        width=width,
        height=height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        is_return_img_ls=True,
    )
    ls = []
    for sub_img in sub_imgs:
        output = read.GetImgText(sub_img)
        if isinstance(separators, list):
            output = MultiSplit(separators, output)
        else:
            output = output.split(separators)
        ls.append(output)
    return ls


def SaveStringTable(
    img,
    width,
    height,
    max_width=None,
    max_height=None,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetStringTable(
        img=img,
        width=width,
        height=height,
        max_width=max_width,
        max_height=max_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        separators=separators,
    )
    PrintTextOutput02(is_show, function_name="SaveColumnText")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )


########################################################################################################################################################


def GetMultiStringTable(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
):
    img = Path2Image(img)
    ls = []
    shape_of_ls = ShapeOfWidthHeightList(width_and_height)
    width_and_height = shape_of_ls[0]
    mode = shape_of_ls[1]
    is_input_valid = shape_of_ls[2]
    if is_input_valid == False:
        Width_and_Height_Warning(width_and_height, "GetMultiStringTable")
        return ls
    else:
        if mode == 0:
            ls = GetStringTable(
                img,
                width_and_height[0],
                width_and_height[1],
                max_width=width_and_height[2],
                max_height=width_and_height[3],
                dilate_img=dilate_img,
                threshold_px=threshold_px,
                kernel=kernel,
                kernel_area=kernel_area,
                is_binary_inv=is_binary_inv,
                is_otsu=is_otsu,
                is_show=is_show,
                separators=separators,
            )
        if mode == 1:
            for wh in width_and_height:
                sub_text = GetStringTable(
                    img,
                    wh[0],
                    wh[1],
                    max_width=wh[2],
                    max_height=wh[3],
                    dilate_img=dilate_img,
                    threshold_px=threshold_px,
                    kernel=kernel,
                    kernel_area=kernel_area,
                    is_binary_inv=is_binary_inv,
                    is_otsu=is_otsu,
                    is_show=is_show,
                    separators=separators,
                )
                ls.append(sub_text)
        PrintTextOutput(
            is_show, output_text=ls, function_name="GetMultiStringTable"
        )
        return ls


def SaveMultiStringTable(
    img,
    width_and_height,
    dilate_img=None,
    threshold_px=None,
    kernel=np.ones((13, 3)),
    kernel_area=9,
    is_binary_inv=True,
    is_otsu=True,
    is_show=False,
    separators="\n",
    title="TextResult",
    folder="TextResult",
    fileformat="txt",
):
    img = Path2Image(img)
    output_text = GetMultiStringTable(
        img=img,
        width_and_height=width_and_height,
        dilate_img=dilate_img,
        threshold_px=threshold_px,
        kernel=kernel,
        kernel_area=kernel_area,
        is_binary_inv=is_binary_inv,
        is_otsu=is_otsu,
        is_show=is_show,
        separators=separators,
    )
    PrintTextOutput02(is_show, function_name="SaveMultiStringTable")
    read.SaveText(
        text=output_text, title=title, folder=folder, fileformat=fileformat
    )
