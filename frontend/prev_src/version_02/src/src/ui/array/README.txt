The purpose of `array/` is to contain function for handle `useReducer` complicated array related logic.

It consistes of
1.  `act_arr.tsx.tsx`
-   Purpose: Handle `"SORT"`, `"PUSH"`, `"DELETE"`, `"EDIT"` and `"SET"` of `useReducer` with array type `t[]` logic.
2.  `act_objarr.tsx`
-   Purpose: Handle `"SORT"`, `"PUSH"`, `"DELETE"`, `"EDIT_ATTR"`, `"EDIT_ITEM"` and `"SET"` of `useReducer` with array type `object[]` logic.
3.  `func_objarr.tsx`
-   Purpose: Implementation for `act_objarr.tsx`
4.  `utility.tsx`
-   Purpose: Contains other utility functions.

Naming meaning
1.  `act_` = function that is used for handle `useReducer` `logic.
2.  `func_` = function.
3.  `arr` = array
4.  `attr` = attribute (use instead of `key` to prevent naming conflict.)
5.  `obj` = object

Command Type meaning of `act_arr` and `act_objarr`
1.  `"SORT"`
-   Sort item in the array.
2.  `"PUSH"`
-   Add new input item in the array.
3.  `"DELETE"`
-   Delete the existing selected item in the array.
4.  `"EDIT_ATTR"`
-   Replace the previous attribute value of the selected item with new input attribute value.
5.  `"EDIT"` and `"EDIT_ITEM"`
-   Replace the previous selected item with new input item.
6.  `"SET"`
-   Replace the previous array with new array.
