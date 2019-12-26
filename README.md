# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## For deploying on heroku, followed this step

1. In package.json, alter the start script from “start”: “ng serve” to “start”: “node server.js” and add new script i.e. “postinstall”: “ng build --aot --prod”.
2.   Add the engines details in package.json. Replace the version whatever you are using.
    ` “engines”: { “node”: “8.12.0”, “npm”: “6.4.1” }`
3. create server.js file in root directory. 
4. Make sure that .gitignore file is not excluding /dist folder because this is the folder where app files are moved after building.
