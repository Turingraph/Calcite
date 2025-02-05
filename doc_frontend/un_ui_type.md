5.  Object_tab ???

Component
-   Mult_sbutton

output

```
[rename, select, copy, optional, x]
```

6.	History_button ???

Component
-   Mult_sbutton

output

```
[<, >, history]
```

7.	Mult_options ???

Component
-   Mult_sbutton
-	State_option

```
+---------------------------------------+
|title [option 0 [x]][add option, reset]|
+---------------------------------------+
```

8.	Obj_input ???

Components
-	Options | None
-	Mult_sbutton
-	Str_input

```
+-----------------------------------------------------+
| title : input | mode : [option] | [activate, reset] |
+-----------------------------------------------------+
```

9.	filter list

Components
-	Mult_sbutton
-	Str_input

```
+------------------------------------------------------------------------+
| list : [1, 2, ..., n] | first second last len scalar [activate, reset] |
+------------------------------------------------------------------------+
```
