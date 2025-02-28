This folder contains only 3 reusable function based files.
1.  `utility_arr.tsx` (utility array method)

```
Rule of every function in this file.
1.  It should takes t[] or a.use_state_t<t[]> as it's input
2.  import * as uarr from ".../utils/utils_arr"
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