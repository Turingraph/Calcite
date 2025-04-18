import cv2
import numpy as np
from pytesseract import Output

from img_process.contour import get_contours, sort_contours
from img_process.utility import check_img
from img_process_class.img_process_rgb import img_process_rgb
from ocr_box.get_row import (add_area, col_box, col_half, filter_half, row_box,
                             row_half)
from ocr_box.ocr import get_oem, get_osd, get_psm, save_text
from ocr_box.ocr_box_reader import ocr_box_reader
from ocr_box.update_box import (get_ocr, select_box, select_line, update_bbox,
                                update_line)
from utility.save import get_valid_path


class ocr_box_editor:
    def __init__(
            self, 
            img: np.ndarray | str,
            box:list[tuple[int]] = [],
            abs_path:bool = False):
        if type(img) == str:
            img:np.ndarray = cv2.imread(
                filename=get_valid_path(path=img, abs_path=abs_path)
            )
            if img is None:
                raise ValueError(f"Error: The file at path '{img}' could not be loaded.")
        elif type(img) == np.ndarray:
            img:np.ndarray = check_img(img)
        else:
            raise TypeError("Error: Input img must be np.ndarray or str")
        self.__img:np.ndarray = img
        self.__all_box:list[np.ndarray] = box
        self.__box:list[np.ndarray] = box
        self.__output:str = ""

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET PRIVATE ATTRIBUTE AS READ ONLY VARIABLE.

    def as_ocr_box_reader(self)->ocr_box_reader:
        # time : O(n)
        # space: O(n)
        return ocr_box_reader(img=self.__img, box=self.__box)

    def get_img(self)->np.ndarray:
        # time : O(1)
        # space: O(1)
        return self.__img
    
    def get_all_box(self)->list[np.ndarray]:
        # time : O(1)
        # space: O(1)
        return self.__all_box
    
    def get_box(self)->list[np.ndarray]:
        # time : O(1)
        # space: O(1)
        return self.__box
    
    def get_output(self)->str:
        # time : O(1)
        # space: O(1)
        return self.__output

#-----------------------------------------------------------------------------------------
    # PURPOSE : MANAGE BOX

    def sort_box(self, reverse: bool = False, method: int = 4)->None:
        # time : O(n * log(n))
        # space: O(1)
        self.__box = sort_contours(contour=self.__box, reverse=reverse, method=method)

    def row_box(self, is_double:bool = False)->None:
        # time : O(n)
        # space: O(n)
        self.__box = row_box(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            is_double=is_double,
        )

    def row_half(self, index:int = 0, is_double:bool = False, is_sort:bool = True)->None:
        # time : O(1) + O(n * log(n))
        # space: O(1)
        self.__box = row_half(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            index=index,
            is_double=is_double,
            is_sort=is_sort
        )

    def col_box(self, is_double:bool = False)->None:
        # time : O(n)
        # space: O(n)
        self.__box = col_box(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            is_double=is_double,
        )

    def col_half(self, index:int = 0, is_double:bool = False, is_sort:bool = True)->None:
        # time : O(1) + O(n * log(n))
        # space: O(1)
        self.__box = col_half(
            all_box=self.__box,
            w=self.__img.shape[1],
            h=self.__img.shape[0],
            index=index,
            is_double=is_double,
            is_sort=is_sort
        )

    def filter_half(self, is_odd:bool = False)->None:
        # time : O(n)
        # space: O(n)
        self.__box = filter_half(
            box=self.__box, 
            is_odd=is_odd)

    def add_x(self, area:int, index:int)->None:
        # time : O(1)
        # space: O(1)
        add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[1],
            mode = 0,
            index=index)

    def add_y(self, area:int, index:int)->None:
        # time : O(1)
        # space: O(1)
        add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[0],
            mode = 1,
            index=index)

    def add_width(self, area:int, index:int)->None:
        # time : O(1)
        # space: O(1)
        add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[1],
            mode = 2,
            index=index)

    def add_height(self, area:int, index:int)->None:
        # time : O(1)
        # space: O(1)
        add_area(
            self.__box, 
            area=area,
            max=self.__img.shape[0],
            mode = 3,
            index=index)

#-----------------------------------------------------------------------------------------
    # PURPOSE : UPDATE self.__all_box and self.__box

    def update_bbox(self,
            thresh_px: int = 0,
            kernel: np.ndarray = np.ones(shape=(13, 23)),
            ksize: int = 9,
            show_result:tuple[int]|int|None|bool = None
        ) -> img_process_rgb:
        # time : O(n)
        # space: O(n)
        output = update_bbox(
            img=self.__img,
            thresh_px = thresh_px,
            kernel = kernel,
            ksize = ksize,
            show_result=show_result
        )
        self.__all_box = get_contours(output.get_gray_img())
        self.__box = self.__all_box
        return output

    def select_box(self,
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
        )->None:
        # time : O(n)
        # space: O(n)
        self.__box = select_box(
            w = self.__img.shape[1],
            h = self.__img.shape[0],
            all_box = self.__all_box,
            min_x = min_x,
            max_x = max_x,
            min_y = min_y,
            max_y = max_y,
            min_w = min_w,
            max_w = max_w,
            min_h = min_h,
            max_h = max_h,
        )

    def select_all_box(self)->None:
        # time : O(1)
        # space: O(1)
        self.__box = self.__all_box

    def update_line(self,
            ksize_w:int = 5,
            ksize_h:int = 5,
            low_thresh:int = 50,
            high_thresh:int = 150,
            thresh:int = 100,
            min_line_len:int = 100,
            max_line_gap:int = 20,
            show_result:tuple[int]|int|None|bool = None
        )->None:
        # time : O(n)
        # space: O(n)
        output = update_line(
            img=self.__img,
            ksize_w=ksize_w,
            ksize_h=ksize_h,
            low_thresh=low_thresh,
            high_thresh=high_thresh,
            thresh=thresh,
            min_line_len=min_line_len,
            max_line_gap=max_line_gap,
            show_result=show_result
        )
        self.__all_box = output[0]
        self.__box = self.__all_box
        return output[1]

    def select_line(self,
            min_x:int = 0,
            max_x:int|None = None,
            min_y:int = 0,
            max_y:int|None = None,
            min_w:int = 0,
            max_w:int|None = None,
            min_h:int = 0,
            max_h:int|None = None,
        )->None:
        # time : O(n)
        # space: O(n)
        self.__box = select_line(
            w = self.__img.shape[1],
            h = self.__img.shape[0],
            all_box = self.__all_box,
            min_x = min_x,
            max_x = max_x,
            min_y = min_y,
            max_y = max_y,
            min_w = min_w,
            max_w = max_w,
            min_h = min_h,
            max_h = max_h,
        )

#-----------------------------------------------------------------------------------------
    # PURPOSE : GET OCR OUTPUT

    def get_ocr(self,
            lang:str = "eng",
            # I might change the default psm as 11 or 13 because the ocr_box_editor and get_ocr already help 
            # the OCR model deal with complicated user customized OCR text format and getting text as much as
            # possible is better than getting less text.
            psm:str|int|None = 3, 
            oem:str|int|None = 3,
            config:str = "-c preserve_interword_spaces=0",
            timeout:int = 0,
            # The default should be 0, especially when the image is processed properly in order to prevent information lost.
            conf:int = 0, 
            search:str="", 
            column:list[int] = [],
            csv_separator:str = ", ",
            first_row:int = 0,
            last_row:int|None = None
        )->None:
        # time : O(n) when n is size of self.__img
        # space: O(n)
     
        output = get_ocr(
            img=self.__img,
            lang=lang,
            config=config + ' ' + get_oem(oem) + ' ' + get_psm(psm),
            timeout=timeout,
            conf=conf,
            search=search,
            column=column,
            csv_separator=csv_separator,
            first_row=first_row,
            last_row=last_row
        )
        self.__output = output[1]
        self.__all_box = output[0]
        self.__box = self.__all_box

        # THIS LINE IS USED FOR CHECK IF THE get_ocr() WORK AS EXPECTED OR NOT.
        """
        # print("lang         ",lang         )
        # print("psm          ",psm          )
        # print("oem          ",oem          )
        # print("config       ",config       )
        # print("timeout      ",timeout      )
        # print("conf         ",conf         )
        # print("search       ",search       )
        # print("column       ",column       )
        # print("csv_separator",csv_separator)
        # print("first_row    ",first_row    )
        # print("last_row     ",last_row     )

        # print("--------------------------------------------------")
        # print("len(output[0])",len(output[0]))
        # print("++++++++++++++++++++++++++++++++++++++++++++++++++")
        # print(output[1])
        # print("--------------------------------------------------")

        # self.__output = pytesseract.image_to_string(
            # image=self.__img,
            # lang=lang,
            # config = config + ' ' + get_oem(oem) + ' ' + get_psm(psm) + "-c preserve_interword_spaces=0",
            # timeout=timeout
        # )

        # self.save_text(
            # abs_path=True,
            # path="/home/pc/Desktop/open_close_rider/tests/save_target/index_abs_path_02.txt"
        # )"""

    """
    We will apply Sweep Line Algorithm in order to get all box that don't intersect with text using
    O(n * log(n)) time and O(n) space.
    Reference
    1.  Check_if_2_lines_intersect.ipynb
    -   https://colab.research.google.com/drive/1hTyYKHRhW-JmD_wTPWL5lWyr3qskcuqn?usp=sharing
    2.  Given n line segments, find if any two segments intersect
    -   https://www.geeksforgeeks.org/given-a-set-of-line-segments-find-if-any-two-segments-intersect/
    -   https://www.youtube.com/watch?v=nNtiZM-j3Pk&list=PLubYOWSl9mItBLmB2WiFU0A_WINUSLtGH
    3.  Linked List in Python
    -   https://stackoverflow.com/questions/47338547/what-is-the-time-complexity-of-iterating-through-a-deque-in-python
    -   https://stackoverflow.com/questions/31093766/iterate-over-deque-in-python
    """
    """
    def update_box_and_text(self,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            config:str = '',
            timeout:int = 0,
            conf:int = 60, 
            search:str="", 
            column:tuple[int] = [],
            csv_separator:str = ", ",
            first_row:int = 0,
            last_row:int|None = None
        ):
        # time : O(n) + O(n * log(n)) due to sorting algorithm.
        # space: O(n)
        ocr_result = get_ocr(
            img=self.__img,
            lang=lang,
            config=config + ' ' + get_oem(oem) + ' ' + get_psm(psm) + "-c preserve_interword_spaces=0",
            timeout=timeout,
            conf=conf,
            search=search,
            column=column,
            csv_separator=csv_separator,
            first_row=first_row,
            last_row=last_row
        )
        self.__output = ocr_result[1]
        self.sort_box(method = 0)
        box_ocr = deque(sort_contours(contour = ocr_result[0], method = 0))
        box_ocr.append((self.__img.shape[1], self.__img.shape[0], 0, 0))
        box_select  = deque() 
        box_img = deque() 

        # time : O(n)
        for i in range(len(self.__box)):
            box_img.append(i)

        # time : O(n^2)
        # The reason is because 
        # box_preserve.append(b_img) and box_img.extendleft(box_preserve)
        # make it require to use O(n) time per iteration
        while len(box_ocr) > 1:
            b_ocr = box_ocr[0]
            # time : O(n)
            while self.__box[box_img[0]][0] + self.__box[box_img[0]][2] < b_ocr[0]:
                box_select.append(box_img[0])
                box_img.popleft()
            box_preserve = deque()
            # time : O(n)
            while (
                (self.__box[box_img[0]][0] <= b_ocr[0] + b_ocr[2]) # and 
                # (self.__box[box_img[0]][0] < box_ocr[1][0])
                ):
                b_img = box_img[0]
                if boundary_checking(
                    x_00= self.__box[b_img][0],
                    y_00= self.__box[b_img][1],
                    w_00= self.__box[b_img][2],
                    h_00= self.__box[b_img][3],
                    x_01= b_ocr[0],
                    y_01= b_ocr[1],
                    w_01= b_ocr[2],
                    h_01= b_ocr[3],
                ) == False:
                    box_preserve.append(b_img)
                box_img.popleft()
            # time : O(n)
            box_img.extendleft(box_preserve)
            box_ocr.popleft()

        self.__box = list(box_select)
    """

    def get_osd(self, out_type:str = Output.STRING, timeout:int = 0) -> any:
        # time : O(1) regardless of how OCR model works.
        # space: O(1)
        output = get_osd(img=self.__img, out_type=out_type, timeout=timeout)
        self.__output = str(output)
        return output

    def save_text(self, path="text/text.txt", abs_path:bool=False)-> None:
        # time : O(n) base on how long the path is.
        # space: O(1)
        save_text(
            text = self.__output, 
            path=path,
            abs_path=abs_path)

#-----------------------------------------------------------------------------------------
