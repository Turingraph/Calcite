from utility.utility import get_options
from ocr.utility import int_from_str

def get_psm(psm:str|int|None)->str:
    message = """
-------------------------------------------------------------------------------------------
ocr/flag_options.py/def get_psm

def get_psm(psm:str)->str:
# This function check if user Tesseract `psm` (Page Segmentation Method) input is available, if not it return the default input.

available `psm` options with Reliability and Description

Mode	Reliability	    Description
--psm 1		NOT RECOMMEND   Default Mode + OSD
--psm 2		NOT RECOMMEND   Unavailable
--psm 3		USEFUL		   	Default Mode
--psm 4		USEFUL			Table
--psm 5		USEFUL			Table + OSD
--psm 6		USEFUL			Book
--psm 7		USEFUL			Single Line
--psm 8		USEFUL			Single Word
--psm 9		NOT RECOMMEND	Single Curve Line
--psm 10	USEFUL			Single Char
--psm 11	USEFUL			No Order
--psm 12	NOT RECOMMEND	No Order + OSD
--psm 13	USEFUL			Deactivate Segmentation Method

Reference
*   https://github.com/Turingraph/JOCR/blob/master/doc/ocr_psm_tutorial.md
*   https://pyimagesearch.com/2021/11/15/tesseract-page-segmentation-modes-psms-explained-how-to-improve-your-ocr-accuracy/
-------------------------------------------------------------------------------------------
"""
    if type(psm) == str:
        psm = int_from_str(psm)
    out = get_options(
        input = psm,
        input_options=[3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        message=message
    )
    return '--psm ' + str(out)

def get_oem(oem:str|int|None)->str:
    message = """
-------------------------------------------------------------------------------------------
ocr/flag_options.py/def get_oem

def get_oem(oem:str|int)->str:
# This function check if user Tesseract `oem` (Engine Mode) input is available, if not it return the default input.

available `oem` options
-   0    Legacy engine only.
-   1    Neural nets LSTM engine only.
-   2    Legacy + LSTM engines.
-   3    Default, based on what is available.

Execute this line to see more details.
-   tesseract --help-oem
-------------------------------------------------------------------------------------------
"""
    if type(oem) == str:
        oem = int_from_str(oem)
    out = get_options(input=oem, input_options=[3, 2, 1, 0], message=message)
    return "--oem " + str(out)
