# Angular Full Stack

The front-end of this project was generated with [Angular CLI](https://github.com/angular/angular-cli).
This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 4](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle and AOT compilation

## Deploy (Heroku)
1. Go to Heroku and create a new app
2. Initialise github project : 
- Connect heroku to github project 
- create new pipeline
- etc
3. Edit `.gitignore` and remove line with `/dist`
4. Edit in `db.ts` the url of MongoDB server to a real server. You can create a MongoDB server with Heroku or mLab.
5. `npm i`
6. `ng build -prod` or `ng build -aot -prod`
7. `tsc -p server`
8. `git add .`
9. `git commit -m "Going to Heroku"`
10. `git push`
11. With heroku web site clic on "Deploy branch" 
12. Finally click on "View"

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `npm start`.

## Running TSLint
Run `ng lint` to execute the linter via [TSLint](https://palantir.github.io/tslint/).

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


