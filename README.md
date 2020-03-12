# typescript-first-approach
learning TypeScript (∩｀-´)⊃━☆ﾟ.*･｡ﾟ

# packages
## npm commands
1. `npm init` 🐛 (creates package.json file)
2. `npm install --save-dev typescript` 🐛 (installs the typescript compiler, `tsc`, locally in your project)
3. If you are having issues with running `tsc` command -like I was-, you may also need to install typescript globally  🐛 `sudo npm install -g typescript`

# structure
```MyProject
|
+ - src
     |
     + helloWorld.ts
     |
     + greeter.ts
```

# sources
[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

[Install the TypeScript compiler for VSCode](https://code.visualstudio.com/docs/typescript/typescript-compiling)

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#html)

# commands to run files
## JS files
You need to have [Node.js](https://nodejs.org/) installed,

and type `node src/helloWorld.js`

## TS files
You need to transpile TS code into JS code (with `tsc`),

by typing `tsc src/helloWorld.ts`,

and then `node src/helloWorld.js`

### Run the TS Build Task
`tsc: build` and `tsc: watch`...

continue reading https://code.visualstudio.com/docs/typescript/typescript-compiling

### Running your TypeScript web app
For those files that don't have console.logs, but instead they are meant to insert the code in HTML -like `src/greeter.ts`-,

you need to create an `src/greeter.html`,

then inside insert a script with `src/greeter.js`,

and open the HTML file in the browser! ;)
