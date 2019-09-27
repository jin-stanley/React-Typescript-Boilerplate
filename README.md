# React-Typescript-Project-Boilerplate

## Install

This boilerplate support both **yarn** and **npm**.

-   The first step after you using this boilerplate, Please using **"npm run install"/"yarn install"**.
-   After you install all packages, you can using yarn start and go localhost:4001 / 0.0.0.0:4001 to view.

## Unit Test

JEST and Enzyme have been set done for this boilerplate.

-   When you want to create a test file for your components or containers, creating a test file named **"\*.test.js"** is recomended.
-   You can use **npm run test** or **yarn test**.
-   We set the "esModuleInterop" in **tsconfig.json**, if you change it to false, all the import will need to change to **"import \* as LibName from 'Lib';"**, otherwise the unit test will be failed.

## Alias(absolute path):

Some paths already set which including: 
1. API: path.resolve(\_\_dirname, 'src/api/'),
2. Assets: path.resolve(\_\_dirname, 'src/assets/'),
3. Components: path.resolve(\_\_dirname, 'src/components/'),
4. Containers: path.resolve(\_\_dirname, 'src/containers/'),
5. Pages: path.resolve(\_\_dirname, 'src/pages/'),
6. Theme: path.resolve(\_\_dirname, 'src/theme/')
   ...

You can create some documents named them as above. and if you want to add absolute path please add in both `webpack.config.js` and `tsconfig.json`.


## Other
You can add any third part libs when you want. If you need any help please leave message on GitHub.