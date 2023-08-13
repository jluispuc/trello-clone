# TrelloClone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Tailwindcss configuration
To get more help about tailwind configuration go check out [Configuration](https://tailwindcss.com/docs/configuration).

## Docker
**Each new dependency that is required should be added to package.json and the docker image should be rebuilt**.

To build the image run `docker build -t clonetrello .`
To run a container run this command:
```bash
docker container run --rm --name dev_clonetrello -p 4200:4200 -v ${PWD}/src:/app/src clonetrello
```
