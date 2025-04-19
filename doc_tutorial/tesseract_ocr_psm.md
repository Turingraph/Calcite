# Introduction

This file describes 13 different Pytesseract PSM Mode. 
Each PSM mode control how the OCR Model to interpret the input image differently and compute the output accordingly.
So understanding the purpose of each PSM mode, help us utilize the Pytesseract better.

It is recommended to read `doc/ocr_tutorial.md` before read this tutorial (`doc/ocr_psm_tutorial.md`).

# Page Segmentation Modes

There are several ways a page of text can be analysed. The tesseract api provides several page segmentation modes if you want to run OCR on only a small region or in different orientations, etc.

Here's a list of the supported page segmentation modes by tesseract -

Mode	Reliability	    Description
0		USEFUL      	OSD (Orientation and Script Detection)
1		NOT RECOMMEND   Default Mode + OSD
2		NOT RECOMMEND   Unavailable
3		USEFUL		   	Default Mode
4		USEFUL			Table
5		USEFUL			Table + OSD
6		USEFUL			Book
7		USEFUL			Single Line
8		USEFUL			Single Word
9		NOT RECOMMEND	Single Curve Line
10		USEFUL			Single Char
11		USEFUL			No Order
12		NOT RECOMMEND	No Order + OSD
13		USEFUL			Deactivate Segmentation Method

To change your page segmentation mode, change the `--psm` argument in your custom config string to any of the above mentioned mode codes.

Reference
* https://pyimagesearch.com/2021/11/15/tesseract-page-segmentation-modes-psms-explained-how-to-improve-your-ocr-accuracy/

# 0	OSD (Orientation and Script Detection)

The tesseract with this mode only detect the orientation and script of text inside input image.

CLI script
* `$ tesseract <image_name> stdout --psm 0`

Python script

```
from PIL import Image
import pytesseract

im = Image.open(path) # path is the path of input image.
osd = pytesseract.image_to_osd(im, output_type='dict')
print(osd)

#   {
#       'page_num': 0, 
#       'orientation': 180, 
#       'rotate': 180, 
#       'orientation_conf': 20.69, 
#       'script': 'Latin', 
#       'script_conf': 33.33
#   }

```

It make 6 output
1. `'page_num'` (Page number)
* The page index of the current item
2. `'orientation'` (Orientation in degree)
* the detected rotation of the image
3. `'rotate'` (Rotate)
* the required rotation angle to get the text in a horizontal format
4. `'orientation_conf'` (Orientation confidence)
* the confidence of Tesseract that the orientation was detected correctly
* higher is better
5. `'script'` (Script)
* provides information about the language or script family to which the detected text belongs
6. `'script_conf'` (Script confidence)
* the confidence of Tesseract that the script was detected correctly
* higher is better

Note that
1. Score of confidence score 15.0 or higher is considered as reliable result.
2. Some languages have the same script type.
* English, Spanish, and French all are classified as `'Latin'` script. 
3. The script type returned by `image_to_osd` is not a one-to-one mapping.
* Chinese Simple and Chinese Traditional the output might be `'Han'` but the language might be `'HanS'`, `'HanS_vert'`, `'HanT'`, and `'HanT_vert'`. 
4. Tesseract in all PSM mode, except 0, 1, 5 and 12, does not adjust the orientation of input image before extracts text.
* So it is recommended to execute Tesseract in 0 PSM mode and adjust input image accordingly manually before apply other PSM mode.

Reference
* https://www.kaggle.com/code/dhorvay/pytesseract-orientation-script-detection-osd

# 1	Default Mode + OSD (Not Recommended)

In this mode, Tesseract adjust image in PSM 0 mode, before get text from image in default mode (PSM 3 mode).

# 3 Default Mode

PSM 3 is the default mode of Tesseract.

In this mode, Tesseract treats the input image as image with paragraphs and extracts text accordingly.

Best Use Case: Use it as the first option and/or when user does not know what is suitable PSM mode for their input image.

# 4	Table

In this mode, Tesseract treats the input image as a text table and extracts text accordingly.

Best Use Case: Extracting data from spreadsheets, tables, or receipts.

# 5	Table + OSD

In this mode, Tesseract adjust image in PSM 0 mode, before get text from image in PSM 4 mode.

Best Use Case: Extracting data from spreadsheets, tables, or receipts.

# 6	Book

In this mode, Tesseract treats the input image as if the image has single, consistent font in every area of image and extracts text accordingly.

Best Use Case: Extracting data from most book page and novel.

# 7	Single Line

In this mode, Tesseract treats the input image as if the image has single line of text and extracts text accordingly.

Best Use Case: Extracting data from image with only one line of text.

# 8	Single Word

In this mode, Tesseract treats the input image as if the image has single word and extracts text accordingly.

Best Use Case: Extracting data from image with only one word.

# 9	Single Curve Line (Not Recommended)

In this mode, Tesseract treats the input image as if the image has single line of text wrapped around an circular/arc region and extracts text accordingly.

It is not recommended to use this feature because it is not reliable.

# 10 Single Char

In this mode, Tesseract treats the input image as if the image has character word and extracts text accordingly.

Best Use Case: Extracting data from image with only one character.

# 11 No Order

Tesseract OCR in this mode will get text from the image of text regardless of the format (order and grouping) of text.

Best Use Case: Extracting as much data from image regardless of the format (order and grouping).

# 12 No Order + OSD (Not Recommended)

In this mode, Tesseract adjust image in PSM 0 mode, before get text from image in PSM 11 mode.

It is recommended to use PSM 0 before PSM 11 explicitly, than use PSM 12.

# 13 Deactivate Segmentation Method

Tesseract OCR in this mode will compute the text output of the image with text, without performing any Page Segmentation Method algorithm.

The reason is because sometime Page Segmentation Method algorithm either increase or decrease the quality of OCR output text result.

Best Use Case: When Tesseract with default mode does not works as expected, and user have no idea to use which mode.
