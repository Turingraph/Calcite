# What is Next JS ?

Next JS is the Framework that based on React, but it update the UI component in Server instead of Browser by default, which help make Next JS faster than React when there is a lot of updated UI components.

# How to set Next JS ?

Answer : `npx create-next-app@latest`

Reference
-   https://nextjs.org/docs/app/getting-started/installation?fbclid=IwY2xjawJAg8ZleHRuA2FlbQIxMAABHaC6DJkci1nVOWRJI_UX7x7avF7L2nFASBiQg2joumxKqFCGc6i-kb309w_aem_cJrFuh2In7Vbj2ses_0jfg#run-the-development-server

# How to run Next JS ?

1.  `npm run build`
2.  `npm run dev`
3.  Visit `http://localhost:3000`
4.  Edit the `app/page.tsx` file and save it to see the updated result in your browser.

Reference
-   https://nextjs.org/docs/app/getting-started/installation?fbclid=IwY2xjawJAg8ZleHRuA2FlbQIxMAABHaC6DJkci1nVOWRJI_UX7x7avF7L2nFASBiQg2joumxKqFCGc6i-kb309w_aem_cJrFuh2In7Vbj2ses_0jfg#run-the-development-server

# How to use React Hook in Next JS ?

```
"use client"; // This is a client component
import { useState } from "react";
...
```

Reference
-   https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

# Can Nextjs use Hooks in Server Components​?

Client-Specific Hooks like `useState`, `useEffect`, and `useRef` rely on the browser to handle side effects, state management, and DOM references. These hooks don’t work in server components because they depend on the client environment to perform operations like state updates and DOM manipulation.

For data fetching, you can call asynchronous functions directly in server components without needing `useEffect` or similar client-side hooks. This makes SSR (Server-Side Rendering) and data fetching simpler and reduces the client-side bundle size

Reference
-   https://medium.com/@oliviarizona/nextjs-can-use-hooks-in-server-components-282237219092

# What is different between app router and pages router in next js ?

App Router is for server side.

Pages Router is for client side.

Reference
-   https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js

# What is recommended folder structure of Next JS Project ?

Apply 3 Next JS Coding advice
1.  Place everything in `app/`
2.  `_` at the beginning of folder name means this folder is not the part of the routes. e.g. `_utility/`, `_type/` etc.
3.  Group the route folder inside parenthesis folder. e.g. `(singer)/` contains `miku/`, `zutomayo/`, `petersinger/` and `joehawley/` etc.
4.  It is recommended to keep only page components inside `app/`, and `components/` outside `app/` for better maintainability.
5.  If you have similar routes that have shared layouts you can use `()` syntax inside app directory. e.g. `(tree)/` contains `xenophyta/`, `binary_tree/`, `binary_search_tree/` and `abstract_syntax_tree/` which chare the same `layout.tsx`etc.

Reference
-   https://stackoverflow.com/questions/76214501/nextjs-13-folder-structure-best-practice

# Other keywords

1.  colocation = the act of placing multiple (sometimes related) entities within a single location.