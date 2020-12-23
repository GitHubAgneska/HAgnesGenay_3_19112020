
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
