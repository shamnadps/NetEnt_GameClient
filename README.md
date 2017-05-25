# README #

### Simple Javascript Client for NetEnt Game Framework ###

### Install ###

1. Using NodeJS

* Install [NodeJS](https://nodejs.org)
* Clone the repository to local.
* Install libraries: `npm install`
* Run: `npm start`

2. Run Manually

* Download the source as zip folder.

### How to use ###

This is very simple chat client using Javascript

* Navigate to `localhost:8080` if you are starting using NodeJS

* Run `index.html` in case you are not using NodeJS and downloaded the source as zip file.


#### Pre Requesites ####

The Client expects that the Server is running at 'http://localhost:1337',
and exposing the api `/casino`.

* Expecting API response as below format

`[{"values":[1,1,5]},{"bonus":false},{"result":"Small Win"}]`

#### Code Styling and Intendation ####

JavaScript Standard Style  is been used for styling and intendation.

* Run `npm test`

This executes `standard --fix` from `package.json` scripts

#### Unit Testing ####

Unit Testing is enabled using mocha and chai.

* Run: `npm test`

This executes `mocha test/**/**spec.js` from `package.json` scripts

#### Bug Reporting ####

Feel free to report any bugs. I will be more than happy to fix them right away.
