# Zeal Trivia Game

## Getting Started

```

npm install # install deps

npm run dev # logic and pages development

npm run build # app production build

```

## Architecture

The current architecture uses the following technologies:

- TypeScript!
- Vite with ESBuild and Rollup behind the scenes
- Styling: CSS & Styled Components
- State Management: Context + TanStack Query
- Routing: React Router v6.23

## Directory Modules

The directory structure is based on the idea of modules. Each module is a
collection of logic, ui, and styling. Core is a shared module. Each page is a
partial module in that it can have a select number of subdirectories instead of
the full thing like Core.

## Directory Structure

```
.
└── src/
   ├── core - contains all shared and global configurations/
   │  ├── assets - icons, images, etc
   │  ├── components - react components and their stories and styling
   │  ├── constants - error messages and router routes
   │  ├── providers - react contexts and their respective providers
   │  ├── interfaces - custom types only! api types as well in case openapi codegen is disabled
   │  └── utils - self explanatory
   │  └── api - self explanatory
   └── pages - each page can have sub-directories with the same structure as ~/core/.
```
