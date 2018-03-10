SMACSS


A starter toolkit based on [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS) and [Atomic Design](http://atomicdesign.bradfrost.com) for [Sass](http://sass-lang.com/) (SCSS) projects. Do what you'd like with it :)

Styles are broken down into the following groups: **Base, Layout, Modules, States, Themes, Utilities**

## Requirements
- Node/NPM
- LibSass
- Gulp

## Installation Process
- npm init (in your project folder)
- npm install gulp --save-dev (install gulp in your folder globally)


## Dependencies
```
  "browser-sync": "^2.23.6",
  "del": "^3.0.0",
  "gulp": "^3.9.1",
  "gulp-cache": "^1.0.2",
  "gulp-cssnano": "^2.1.2",
  "gulp-if": "^2.0.2",
  "gulp-sass": "^3.1.0",
  "gulp-uglify": "^3.0.0",
  "gulp-useref": "^3.1.4",
  "run-sequence": "^2.2.1"
```
## Directory structure

```
┌── .gitignore
├── src
│   ├── images
│   ├── js
│   └── scss
│       ├── base
│       │   ├── _base.scss
│       │   ├── _normalize.scss
│       │   ├── _pesticide.scss
│       │   └── _index.scss
│       ├── layout
│       │   └── _header.scss
│       │   └── _footer.scss
│       │   └── _navbar.scss
│       │   └── _index.scss
│       ├── modules
│       │   ├── _socialNav.scss
│       │   ├── _index.scss
│       ├── states
│       │   ├── _index.scss
│       ├── themes
│       │   └── purple.scss
│       ├── utilities
│       │   ├── _colors.scss
│       │   ├── _fonts.scss
│       │   ├── _functions.scss
│       │   ├── _index.scss
│       │   ├── _mixins.scss
│       │   ├── _helper.scss
│       │   ├── _typography.scss
│       │   ├── _mixins
│       │        ├── _border.scss
│       │        ├── _hover.scss
│       ├── styles.scss
├── gulpfile.js
└── package.json
└── index.html
