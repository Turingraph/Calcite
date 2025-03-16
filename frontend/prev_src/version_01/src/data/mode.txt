//------------------------------------------------------------------------------------

// TITLE : IMG

export const IMG_THRESH = [
   "cv2.THRESH_BINARY      ",
   "cv2.THRESH_BINARY_INV  ",
   "cv2.THRESH_TRUNC       ",
   "cv2.THRESH_TOZERO      ",
   "cv2.THRESH_TOZERO_INV  ",
]

export const IMG_THRESH_OTSU = [
    "yes", 
    "no"
]

export const IMG_THRESH_ADP = [
    "cv2.ADAPTIVE_THRESH_MEAN_C",
    "cv2.ADAPTIVE_THRESH_GAUSSIAN_C"
]

export const IMG_BLUR = [
    "MEAN BLUR",
    "GAUSS BLUR",
    "BILATERAL BLUR"
]

//------------------------------------------------------------------------------------

// TITLE : OCR

export const OCR_PSM = [
    "0  : (Orientation and Script Detection)",
    "1  : Default Mode + OSD",
    "2  : Unavailable",
    "3  : Default Mode",
    "4  : Table",
    "5  : Table + OSD",
    "6  : Book",
    "7  : Single Line",
    "8  : Single Word",
    "9  : Single Curve Line",
    "10 : Single Char",
    "11 : No Order",
    "12 : No Order + OSD",
    "13 : Deactivate Segmentation Method",
]

export const OCR_OEM = [
	"0 : Legacy engine only.",
	"1 : Neural nets LSTM engine only.",
	"2 : Legacy + LSTM engines.",
	"3 : Default, based on what is available.",
]

export const OCR_FILTER = [
    "WHITE LIST",
    "BLACK LIST"
]
