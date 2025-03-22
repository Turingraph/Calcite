import numpy as np
from pytesseract import Output

from ocr_config.flag_options import get_oem, get_psm
from ocr_config.img_to_str import img_to_str
from ocr_config.osd import osd
from ocr_config.save_text import save_text


# ocr = Optical Characteristic Recognition
class ocr_config:
    def __init__(
            self,
            lang:str = "eng",
            psm:str|int|None = 3,
            oem:str|int|None = 3,
            timeout:int = 0,
            config:str = '',
            is_space:bool = True
            ):
        self.output:str = ''
        self.lang:str = lang
        self.psm:str = get_psm(psm)
        self.oem:str = get_oem(oem)
        self.timeout:int = timeout
        self.config:str = config
        self.is_space:bool = is_space

    # Convert img image to OCR text output
    def img_to_str(self, img:np.ndarray|str)-> None:
        self.output = ''
        self.output = img_to_str(
                        img=img,
                        lang = self.lang,
                        config=self.psm + ' ' + self.oem + ' ' + self.config,
                        timeout=self.timeout,
                        is_space=self.is_space
                    )

    # Get OSD (Orientation and Script Detection) data from the input img image
    def osd(self, img:np.ndarray, out_type:str = Output.STRING) -> any:
        return osd(img=img, out_type=out_type, timeout=self.timeout)

    # save the OCR text output `self.output` as text file
    def save_text(self, path: list[str] | str = ["text", "text", "txt"])-> None:
        save_text(self.output, path)
