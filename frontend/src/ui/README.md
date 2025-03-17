## Folder Structure of `frontend/src/src/`

List of the folders in `frontend/src/src/`
1.	`array/`
-	Purpose: Contain function for handle `useReducer` for complicated array related logic.
3.	`components/`
-	Purpose: Contains reuseable UI components.
4.	`convert/`
-	Purpose: Transform one type of input to the expected output.
4.	`data/`
-	Purpose: Contains only constant variable and JSON files.
7.	`type/`
-	Purpose: Contains reusable type.
8.	`utility`
-	Purpose: Contains other files.

Note that `layout/` and `pages/` contains only empty functions.

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
