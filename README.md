# create-typescript-app

Simple typescript app with jest for small and fast projects

## Installation

```sh
npx degit https://github.com/TheSmartMonkey/create-typescript-app app
```

## Getting started

1. Install nodejs : https://nodejs.org/en/

1. Install node_modules with `npm install`

1. Avalable commands with `npm run` (`npm run start` runes your code from `main.ts`)

```
start
  npm run build && node dist/main.js
test
  jest
lint
  eslint src --ext .ts
clear
  rmdir /s "dist"
build
  tsc
```

## Folder tree

```
|   .eslintrc.json
|   .gitignore
|   .prettierignore
|   .prettierrc.json
|   jest.config.ts
|   junit.xml
|   LICENSE
|   main.ts
|   package-lock.json
|   package.json
|   README.md
|   tree.txt
|   tsconfig.json
|   tsconfig.paths.json
|
+---src
    |   tree.txt
    |
    +---functions
    |       hello.test.ts
    |       hello.ts
    |
    +---libs
    |       .gitkeep
    |
    +---models
            hello.model.ts
```
