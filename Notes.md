
---
### SASS install /use
---
- `brew sass`  or  `npm i sass`
- create sass input folder +  css output folder
- have html point towards css output files

- add script to package.json to automatically update/recompile scss changes and output to css :  
    ` "scripts": {
        "scss": "sass --watch scss:css"
        }`

- run command `sass `

- !! browser inspector => deactivate 'show original sources' so it uses .css stylesheet and not .scss (which sass syntax will not do here in the browser)

---
---

SASS SCSS AUTOPREFIXER
-----
    
    `npm run prefix`


----
----


BREAKPOINTS MAIN
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {} 
