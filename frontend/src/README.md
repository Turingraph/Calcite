# Introduction

`frontend/src/` is the main folder that contains the frontend of our project 
which use the same medium size folder structure from this video 
( https://youtu.be/UUga4-z7b6s?si=zVLOKLGrSHe0s0rG )

## Folder Structure of `frontend/src/`

List of the folders in `frontend/src/`
1.	`api`
-	Purpose: It is used for creating API. Now it is unusable and under development.
1.	`components/`
-	Purpose: Contains reuseable UI components.
2.	`data/`
-	Purpose: Contains only constant variable and JSON files.
3.	`layout/`
-	Purpose: Contains file that composed by `components/` files for this specific OCR project.
4.	`pages/`
-	Purpose: Contains only UI page that are made by `layout/` and arrange as sub part of the main page.
5.	`test/`
-	Purpose: Check if our Typescript frontend files work as expected.
6.	`tutorial`
-	Purpose: demonstrate Typescript and Javascript Tutorial with coding examples.
7.	`type/`
-	Purpose: Contains reusable type.
8.	`utility`
-	Purpose: Contains other files.

Note that we might add the following files in the future.
1.	`assets/`
-	Purpose: Contains only CSS file, image, logo image and other non-coding components in our project.
2.	`context/`
-	Purpose: Contains `context` ( https://react.dev/learn/passing-data-deeply-with-context )
3.	`hooks/`
-	Purpose: Contains cutomized React Hook.

The reason to do this is because 
-	categorizing files to different concern make it easier to code.
-	The `components/` and `layout/` can be used multiple time in `pages/` 
-	each sub files inside `pages/` contains unique files that only used onces for specific purpose.

Limitation
-	This folder structure might not suitable for small size projects e.g. TicTacToe, simple calculator etc, 
	because it add unnecessary complexity.
-	This folder structure might not suitable for large size project because when the app get more 
	complicated, the `components/` and `layout/` might have too many coding UI files that use for a fews or single time.
	This make it harder to code `components/`. The better approaches in this case is to create `features/`
	folder that contains multiple sub folder for each feature.
	This project might be developed as the large scale project in the future, but we choose the medium size
	folder structure instead and refactor it later, in order to make the development process much more easily
	and avoid wasting time on over planning.

Note that `__` means that the folder is unusable and in the development process.
