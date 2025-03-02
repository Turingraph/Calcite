import * as a from '../type/alias'

export const LANGUAGE_OPTS:string[] = ['eng', 'osd']
export const PSM_OPTS:string[] = [
    '--psm 1  (Default Mode + OSD)',
    '--psm 3  (Default Mode)',
    '--psm 4  (Table)',
    '--psm 5  (Table + OSD)',
    '--psm 6  (Book)',
    '--psm 7  (Single Line)',
    '--psm 8  (Single Word)',
    '--psm 9  (Single Curve Line)',
    '--psm 10 (Single Char)',
    '--psm 11 (No Order)',
    '--psm 12 (No Order + OSD)',
    '--psm 13 (Deactivate PSM)',
]
export const OEM_OPTS:string[] = [
    '--oem 1  (Legacy engine only)',
    '--oem 2  (Neural nets LSTM engine only)',
    '--oem 3  (Legacy + LSTM engines)',
    '--oem 4  (Default, based on what is available)',
]

export const IMG_PROCESS_BUTTON_NAME:a.name[] = [
    "gray",
    "remove noice",
    "thin font",
    "thick font",
    "invert image"
].map((item)=>{return item as a.name})

export const IMG_FILE_FORMAT = ".jpg,.jpeg,.bmp,.dib,.png,.webp,.sr,.ras,.tiff,.tif"
 