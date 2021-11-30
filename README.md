# Monorepo with server(express), react, http-client packages - All Typescript
### Yarn 3 Plug N Play, Typescript, ESLint, prettier MONOREPO. 

The main goal of this repo is to create a monorepo using below features  
1. Yarn Plug N Play feature
2. Use below deps across all the packages
  - Typescript
  - Eslint
  - Prettier
  - ts-node-dev for reloading all typescript files in development.
  - husky for git hooks
  
  
### Unfortunately
As yarn's pnp is not playing nice with typescript we are having a branch(fix/fallback-node-modules) to use fallback node_modules. This disbales pnp feature of yarn. 
Unless typescript or yarn fixes this issue we can't move furture.

All the packages are working fine in both the master and fix/fallback-node-modules
1. If you go with master branch you will see all the errors in your packages eg: App.tsx file because typescript is not able to resolve .yarn/cache deps. 
    This is an issue with Typescript. We have to wait until Typescript or Yarn comes up with any solution.
2. If you go with fix/fallback-node-modules branch you can start developing your project but you will not have yarn's pnp feature. 


Development Commands
1. server package: **yarn server dev or yarn workspace @mb/server dev**
2. http-client package: **yarn http-client dev or yarn workspace @mb/http-client dev**
3. react app: **yarn react-app dev or yarn workspace @mb/react-app dev**




