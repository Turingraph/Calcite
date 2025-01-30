JOCR MVP coding plan
1.	Changing coding style (1 day, if we use more time than that, use only 5 coding rules and chaning tyle again in 1 day)
2.	Executing and documenting test (1 day, if we use more time that that, delete 1 to 2 sub folders)
3.	Refactor img_process (3 days)
4.	Make img_to_str (1 day)
5.	Make table (3 days, if we use more time than that, ignore it in MVP)
6.	Make front-end with one page (10 days, if use time more than that try to make our app able to do basic OCR task and ignore some feature)
7.	Code review (2 days, focus on first 2 SOLID principles, coding smell and 3 design patterns that recommended by ChatGPT, if use time more that that, ignore it)
8.	tesseract_ocr_installation.md (1 day, try to summarize tesseract ocr installation official website.)
9.	Deploy (2 days, if use more than that contact Jojo)
10.	User doc and YouTube video (1 day)

Status
*	finish 1, 2, 3, 4 and 5 JOCR MVP coding plan steps !

JOCR coding plan (should spend less than 11 days)
*	start date: 2024 01 27
*	death line: 2024 02 07
1.	use Figma to design UI based on `ui_design/ui_idea.md` and https://youtu.be/ezldKx-jPag?si=4ce56yU6yaYX6HSU (1 day)
2.	create UI class diagram in Figma. (1 day)
3.	implement UI using React Typescript. (1 days)
4.	implement `get_data/` in order to allow user to download their output data.
5.	design `img_01 ui` for `include/img_process_gray.py` and `img_02 ui` for `include/boxes_img.py` and `include/multi_ocrs.py` in `ui_design/ui_idea.md`, Figma and implementing in React Typescript (6 days)

Top 3 Recommended Design Patterns by ChatGPT
1.	Strategy
2.	Factory
3.	Decorator

Read more in `doc/chat_gpt_design_pattern_advice.md`
Learn more about design pattern in Refactor Guru website.
*	https://refactoring.guru/design-patterns
