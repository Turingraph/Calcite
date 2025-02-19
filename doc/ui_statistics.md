# List of all UI components with `useState` and/or `useEffect` hook
asset
1.	close_panel.tsx

button
1.	button_history.tsx
2.	button_tabs.tsx

input
1.	input_form.tsx

obj
1.	obj_self.tsx
2.	obj_str.tsx

one_time_use
1.	filter_kernel.tsx

opt
1.	opt_exist_arr
2.	opt_input.tsx
3.	search_bar.tsx

# Count Parameter

ID	FOLDER	FILE			PROP	NEED_PROP	useState	useEffect
0	asset	close_panel		6		2			1			0
1	asset	color_ui		2		1			0			0
2	asset	panel			5		1			0			0
3	button	button_click	2		2			0			0
4	button	button_history	1		1			1			1
5	button	button_tabs		2		2			1			0
6	input	input_combine	5		0			0			0
7	input	input_form		4		1			3			1
8	input	input_str		4		1			0			0
9	obj		obj_bool		5		3			0			0
10	obj		obj_self		4		3			2			2
11	obj		obj_str			5		3			2			0
12	one_t...filter_kernel	3		3			5			2
13	opt		opt_exist_arr	5		2			3			1
14	opt		opt_input		4		2			1			0
15	opt		search_bar		4		3			1			1

CONDITION		NUMBER
all				16
no hook			6
no useState		6
no useEffect	10
prop <= 4		10
need_prop <= 4	16
