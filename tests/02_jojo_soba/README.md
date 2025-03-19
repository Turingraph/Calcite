# What is the best and the simplies image processing configuration in most case ?

*   It is recommended to use `img.threshold()` because it is simple and reliable compare to alternative in most case.
*   /

# How to get text data from the photo of bills ?

1.  Edit image
2.  use `boxes_img( img = img, kernel = np.ones((y,x)))`
3.  `img.select_boxes(min_w,max_h,max_w,max_h)`
4.  define `ocr_driver = ocr_config()`
5.  `ocr_00.img_to_str(img=img.boxes[i])`
6.  `ocr_00.save_text(path = "my_ocr_output")`

# Additional Learning Resource

*   https://youtu.be/9FCw1xo_s0I?si=p5_igTL5jUrwfvUh
*   https://github.com/Turingraph/Calcite/tree/main/include
