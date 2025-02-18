# Note that

Our UXUI design for OCR App is not finished. It might be simplified in the future.

# ui (image setting)

```
+----------------------------+-----------------------------------------------------------------------+
|[<,>,history][help][display]| advance setting:[setting, ocr, image processing, box]                 |
|[open] [save] [sort_img]	 +-----------------------------------------------------------------------+
|[select all, unselect all..]| // NAME: Config (a.k.a. advance setting)						         |
+----------------------------+ // this depending if user click ocr, image processing	, or 		 |
|Search Bar				     | // box taps.												 	 		 |
+----------------------------+++---------------------------------------++----------------------------+
|							 |||[<, >,history][origin,gray,this,dilate]||[ocr, box, osd]			 |
|							 ||+---------------------------------------++----------------------------+
|							 |||	[+, -]							   ||[<, >,history][activate ocr]|
|							 |||									   |+---------------------------++
|							 |||									   || // NAME: output			||
|			img1			 |||									   || // This depending if user	||
|							 |||									   || // click ocr, box or osd	||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
+----------------------------+||									   ||							||
|"img1" [rename, select,x...]|||									   ||							||
+----------------------------+||									   ||							||
+----------------------------+||									   ||							||
|							 |||									   ||							||
|							 |||	clicked_image					   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|			img2			 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
|							 |||									   ||							||
+----------------------------+||									   ||							||
|"img2" [rename, select,x...]||+---------------------------------------++---------------------------+|
+-----------------------------+++--------------------------------------++---------------------------++

[select all, unselect all..] = [
    reset image,
    activate image processing, 
    activate ocr, 
    activate dilate image, 
    select all, 
    unselect all,
    ]

Note that if user click "activate image processing" or "activate ocr" when there is no selected image,
it will show the warning that there is no selected image.

The OCR app will convert select all input image to the right rotation and Otsu Threshold automatically by default, 
but user can undo this operation by click [select all] and [reset image].

[rename, select,x...]
1. [rename, select, copy, open, x]
2. [select, copy, x] 
* double or right click to rename file 
* right click to delete file

[open] = choose folder with image or image file.
advance setting:[setting] = open setting.json file.
```

## save

```
+-------------------------+
| folder name  : string	  |
| image format : [option] |
| text format  : [option] |
| save_config  : [option] |
| [ok, cancel]            |
+-------------------------+
```

[ save ] 3 things
1.  image
2.  text 
3.  advance setting configulation

save input
1.  folder name 
2.  image format (None means no image)
3.  text format (None means no text)
4.  is_save_config (bool)

save image format
-   output_folder/img_00.jpg 
-   output_folder/img_01.jpg 
-   output_folder/...
-   output_folder/img_n.jpg

save text format
-   output_folder/img_00.txt
-   output_folder/img_01.txt
-   output_folder/...
-   output_folder/img_n.txt

save image and text format
-   output_folder/img_00.jpg
-   output_folder/img_00.txt 
-   output_folder/img_01.jpg
-   output_folder/img_01.txt 
-   output_folder/...
-   output_folder/img_n.jpg
-   output_folder/img_n.txt

save config format
-   output_folder.json

save config and other format
-   output_folder.json
-   output_folder/...

## Config ocr

```
+-------------+
|psm [option] |
+-------------+

+-----------------------------------+
|languare [option 0 [x]][add option]|
+-----------------------------------+

+--------------+
| oem [option] |
+--------------+

[activate ocr]

+------------------+
|timeout: n seconds|
+------------------+

[osd]

+----------------------------------------------------------+
|[whitelist or blacklist] | search characters | [ok, reset]|
+----------------------------------------------------------+
```


## Config image process

```
+----------------------------+
|rotate: n orient [ok, auto] |
+----------------------------+

[gray]

[remove noice]

[thin font]

[think font]

[invert image]

+------------------------------------------------------------------------+
| list : [1, 2, ..., n] | first second last len scalar [activate, reset] |
+------------------------------------------------------------------------+

mode [option]
1.	cv2.MORPH_RECT
2.	cv2.MORPH_ELLIPSE
3.	cv2.MORPH_CROSS

+------------------------------------------------------+
| dilate : row, col | mode [option] | [activate, reset]|
+------------------------------------------------------+

+------------------------------------------------------+
| erode : row, col | mode [option] | [activate, reset] |
+------------------------------------------------------+

+------------------------------------------------------+
|opening : row, col | mode [option] | [activate, reset]|
+------------------------------------------------------+

+-----------------------------------+
| canny : c1 c2 | [activate, reset] |
+-----------------------------------+

+------------------------------------------------------+
| filter : row, col | mode [option] | [activate, reset]|
+------------------------------------------------------+

[activate, reset, ...] = [activate, reset, make sharp filter, make blur filter]

+---------------------------------------------------------------+
| threshold : thresh_px | method : [option] | [activate, reset] |
+---------------------------------------------------------------+

+----------------------------------------------------------------------+
| threshadp | method : [option] | ksize | constant | [activate, reset] |
+----------------------------------------------------------------------+

+------------------------------------------------------------------+
| blur [option] | ksize : ksize | effect : effect [activate, reset]|
+------------------------------------------------------------------+
```

## Config box

```
+-------------------------------+
| color box: rgb1	rgb2		|
| min_w | max_w | min_h | max_h |
| min_x | max_x | min_y | max_y |
| [activate]					|
+-------------------------------+

+------------------+
|sort box: [option]|
+------------------+

+--------------------------------------------------------------------------------+
|get box around [text or char] : search text | mode : [text or regx] | [activate]|
+--------------------------------------------------------------------------------+

// contour dilate image

+------------------------------------------------------+
| dilate : row, col | mode [option] | [activate, reset]|
+------------------------------------------------------+

+---------------+
|thresh_px: num |
+---------------+

+-----------+
|ksize: num |
+-----------+

//

[select all]
[unselect all]

[delete boxes]

+---------------------------------+
|color rgb1 rgb2 [activate, reset]|
+---------------------------------+

```

## output box

```
+------------+
| search box |
+------------+

+-----------------------------------------------+
|[x, copy, up, down, index, select, ocr ignore] |
+-----------------------------------------------+
| name, x,y,w,h, rgb							|
+-----------------------------------------------+
```

# attribute

display
1.	panel_img: int
2.	panel_config: int
3.	panel_output: int
4.	display_img: int
5.	display_img_file: int
6.	zoom: float
7.	scroll bar: float [ 5 ]
8.	images: linked list [ img ]

img
1.	name: string
2.	select: bool
3.	index: int
4.	image: np.ndarray
5.	origin: np.ndarray
6.	dilate: np.ndarray
7.	history: linked list [ np.ndarray ]
8.	ocr_text: string
9.	boxes: linked list [ box ]
10.	osd: string

box
1.	name: string
2.	x,y,w,h: array [ int ]
3.	rgb: array [ int ]
4.	select: bool
5.	ocr ignore: bool
6.	index: int

ocr 
-	see `include/ocr.py`

image processing
-	see `include/img_process_gray.py`
