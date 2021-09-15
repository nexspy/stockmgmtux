# Stock Management UX


# Project Introduction

I am trying to create a stock management UX taking inspiration from Pinterest and Dribbles. Main goal of this project is to understand how UX can help the application grow.

We will use this design in the react application later on.

## Technologies used


### Gruntjs

A grunt file is created in root **Gruntfile.js**. Then we can run grunt task using grunt command. Sass is used for css creation and kept in the **./scss** folder. The javascripts are kept in the **./js** folder. The scss files are compiled into css and compressed and put in the **./dist/css** folder. While the javascript is exported to the **./dist/js** folder. There will be two files created **production.js** which is non-minified file and the other file is **production.min.js** which is the minified file.

```console
> grunt
```

To run single/particular task:

```console
> grunt sass
```


### SASS

To add sass, we create a single file called **main.scss** and import rest of the files inside it using keyword **import**.

```json
@import "./style.scss";
@import "./sidebar.scss";
```
