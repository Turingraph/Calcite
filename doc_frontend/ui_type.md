# Basic UI

1.  State_button

input< type >
-	title: string
-	ss_value: type
-	setss_value: setState hook < type >

output

```
[State_button]
```

2.  State_option

input < type >
-	title: string|None
-	mode_title: string
-	ss_mode: type
-	setss_mode: useState hook < type >

output

```
+---------------+
| mode [option] |
+---------------+

+--------------+
| psm [option] |
+--------------+

+--------------+
| oem [option] |
+--------------+

[whitelist or blacklist]

+-------------------+
| method : [option] |
+-------------------+
```

3.	Search_bar

input
-	names: string
-   exist_names: string[]

output

```
+------------+
| search bar |
+------------+
```

4.	Str_input

input
-	names: string|None
-   exist_names: string[]

```
+---------------+
| title : input |
+---------------+
```

5.  Panel

input
1.  components: JSX.Element
2.  vertical_scroll_bar: bool
3.  horizontal_scroll_bar: bool
4.  width: int|None
5.  height: int|None

```
+-------------------++
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
|					||
+-------------------++
+-------------------++

++
||
||
||
||
++ means vertical scrollbar.

+-------------------+
+-------------------+ means horizontal scrollbar.
```

# Composite UI

Definition
-	UI that have Basic UI as it's components.

1.  Ok_no_button ???

Component
-   Mult_sbutton(2)

output

```
+----------------------+
| [input] [ok, cancel] |
+----------------------+
```

2.  Mult_sbutton ???

Component
-   n State_button

output 

```
[button_00, button_01, ..., button_n]
```

3.  Show_tab ???

Component
-   Mult_sbutton

output

```
[origin,gray,this,dilate]

[ocr, image processing, box]

[ocr, box, osd]
```

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
