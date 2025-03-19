import numpy as np
from pytesseract import Output

from include.img_process_gray import img_process_gray
from include.img_process_rgb import img_process_rgb
from ocr.flag_options import get_oem, get_psm
from ocr.img_to_str import img_to_str
from ocr.osd import osd
from ocr.save_text import save_text


# ocr = Optical Characteristic Recognition
class ocr_config:
    def __init__(
            self,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            timeout:int = 0,
            config:str = ''
            ):
        self.output:str = ''
        self.lang:str = lang
        self.psm:str = get_psm(psm)
        self.oem:str = get_oem(oem)
        self.timeout:int = timeout
        self.config:str = config

    # Convert img image to OCR text output
    def img_to_str(self, img:np.ndarray|img_process_rgb|img_process_gray|str)-> None:
        if isinstance(img, img_process_rgb) or isinstance(img, img_process_gray):
            img = img.img
        self.output = ''
        self.output = img_to_str(
                        img=img,
                        lang = self.lang,
                        config=self.psm + ' ' + self.oem + ' ' + self.config,
                        timeout=self.timeout
                    )

    # Get OSD (Orientation and Script Detection) data from the input img image
    def osd(self, img:np.ndarray|img_process_rgb|img_process_gray, out_type:str = Output.STRING) -> any:
        if isinstance(img, img_process_rgb) or isinstance(img, img_process_gray):
            img = img.img
        return osd(img=img, out_type=out_type, timeout=self.timeout)

    # save the OCR text output `self.output` as text file
    def save_text(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        save_text(self.output, path)
