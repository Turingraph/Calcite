# Introduction

`frontend/src/` is the main folder that contains the frontend of our project 
which use the same medium size folder structure from this video 
( https://youtu.be/UUga4-z7b6s?si=zVLOKLGrSHe0s0rG )

## Folder Structure of `frontend/src/`

List of the folders in `frontend/src/`
1.	`assets/`
-	Purpose: Contains only CSS file, image, logo image and other non-coding components in our project.
2.	`components/`
-	Purpose: Contains reuseable UI components.
3.	`context/`
-	Purpose: Contains `context` ( https://react.dev/learn/passing-data-deeply-with-context )
4.	`data/`
-	Purpose: Contains only constant variable and JSON files.
5.	`function/`
-	Purpose: Contains reusable function based files. 
6.	`hooks/`
-	Purpose: Contains React Hook.
7.	`pages/`
-	Purpose: Contains only UI page that are made by `components/`.
8.	`test/`
-	Purpose: Check if our Typescript frontend files work as expected.
9.	`tutorial`
-	The purpose of this folder is to demonstrate Typescript and Javascript Tutorial with coding examples.
10.	`utils`
-	Purpose: Contains other files.

The reason to do this is because 
-	categorizing files to different concern make it easier to code.
-	The `components/` can be used multiple time in `pages/` 
-	each sub folder inside `pages/` contains unique files that only used onces for specific purpose.

Limitation
-	This folder structure might not suitable for small size projects e.g. TicTacToe, simple calculator etc, 
	because it add unnecessary complexity.
-	This folder structure might not suitable for large size project because when the app get more 
	complicated, the `components/` might have too many coding UI files that use for a fews or single time.
	This make it harder to code `components/`. The better approaches in this case is to create `features/`
	folder that contains multiple sub folder for each feature.
	This project might be developed as the large scale project in the future, but we choose the medium size
	folder structure instead and refactor it later, in order to make the development process much more easily
	and avoid wasting time on over planning.

Note that `__` means that the folder is unusable and in the development process.
