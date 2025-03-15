Tutorial Video Play List
1.  Title: Introduction - Next.js 14 Course Tutorial #1
-   URL  : https://youtu.be/bArqc5ZTXGs?si=QqegNL5oEdVU6W0R
2.  Title: Set up a Next.JS Project - Next.js 14 Course Tutorial #2
-   URL  : https://youtu.be/QjUES_l_J2A?si=vq6-N5N30w-VZo0K
3.  Title: Pages & Routes - Next.js 14 Course Tutorial #3
-   URL  : https://youtu.be/W09K95djOy0?si=qSFOXifubFIROzwN
-   Note : 
    1. create app/pagea/page.tsx to create localhost:3000/pagea/
    2. use Link to create herf tags.
4.  Title: Project Pages Setup & CSS - Next.js 14 Course Tutorial #4 
-   URL  : 
    1.  https://youtu.be/orKoHewt9OY?si=cVyoQGWGrgsktncT
    2.  https://tailwindcss.com/docs/installation/framework-guides/nextjs
-   Note :
    1.  `npm i @tailwindcss/typography@0.0.0-insiders.0339c42` for help making text much more beautiful.
    2.  install daisyUI
    3.  How to use TailwindCSS
5.  Title: Layout - Next.js 14 Course Tutorial #5
-   URL  : https://youtu.be/kky8Fcq6QjI?si=f6kGS-YAxLYD7K6V
-   Note : see frontend/src/app/layout.tsx
6.  Title: Navigation - Next.js 14 Course Tutorial #6
-   URL  : https://youtu.be/6DzbKCGGGbo?si=xhRigoA_7JCPscIk
-   Note : `<Link href=directory className=css>Go to another directory</Link>`
7.  Title: Server vs Client components - Next.js 14 Course Tutorial #7
-   URL  : https://youtu.be/2rk0WpbyxuI?si=KZkXTDfbwcXbIP9s
-   Note : 
    1.  There are 2 type of components, the server components (default type) and client component (computed by Browser instead of server)
    2.  use `"use client"` at first line of code to convert the component file to client component and use React Hook.
8.  Title: Building counter - Next.js 14 Course Tutorial #8
-   URL  : https://youtu.be/yMAnn8No7_I?si=jv-tqO1q4oo3QYpr
-   Note :
    1.  `console.log` from server component, activates on Terminal
    2.  `console.log` from client component, activates on Terminal
9.  Title: Fetching Data - Next.js 14 Course Tutorial #9
-   URL  : https://youtu.be/Xpa1A5cRtCg?si=MSujZIa4zSvHilUh
-   Note :
    1.  How React works   : client <--> server <--> database
    2.  How Next JS works : server <--> database (thus it work faster than React)

```
import React from "react"

const URL = "https://..."

const BAR = async () => {
    const RESPONSE = await fetch(URL)
    const DATA = await RESPONSE.json()
    console.log("BAR : DATA :",DATA)
    return <div>Bar</div>
}

export default BAR;
```

Reference
-   https://www.youtube.com/watch?v=bArqc5ZTXGs&list=PLjsBk8SIQEi9d8LbQdEz2LTjSZFWyJwy6
