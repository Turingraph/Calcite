This folder contains only 3 reusable function based files.
1.  `utility_arr.tsx` (utility array method)

```
Rule of every function in this file.
1.  It should takes t[] or a.use_state_t<t[]> as it's input
2.  import * as uarr from ".../utils/utils_arr"

Note that the order of the object with name property (e.g. image, box around the text etc)
always sorted in alphabet name order, and user unable to change the order of the object.

So every time the user change the name of the objects and/or create new object,
`update_item_name` and `push_arr_name` must also sort the order of the text automatically.
```

2.  `convert.tsx` 
-   Purpose: convert one data type e.g. string etc. to another data type e.g. number etc.

```
Rule of every function in this file.
1.  It should have `_to_` at the middle of the name or begin with `check_` to check the type.
2.  It should be used for convert variable to get valid output
```

3.  `utility.tsx`
-   Purpose: handle other issue.

```
Rule of every function in this file.
1.  import * as u from ".../utils/utils"
```

4.  `utility_arr_unused.tsx` (utility array method)
-   Purpose: contains function that based on `utility_arr.tsx` but never be used yet.

5.  `utility_unused.tsx`
-   Purpose: contains function that based on `utility.tsx` but never be used yet.
