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
* Extract the Zip file.
* Open the `index.html` in any browser.

### How to use ###

This is very simple chat client using Javascript

* Navigate to `localhost:8080` if you are starting using NodeJS

* Run `index.html` in case you are not using NodeJS and downloaded the source as zip file.


#### Pre Requesites ####

The Client expects that the Server is running at 'http://localhost:1337',
and exposing the api `/casino`.

* Expecting API response as below format

`[{"values":[1,1,5]},{"bonus":false},{"result":"Small Win"}]`

#### Score Points ####

* Score points has also been added

1. No Win - 0 points
2. Small Win - 10 points
3. Big Win - 100 points.

#### Bonus ####

* Bonus is received randomly from server.
* This enable a free play in the game for the user.

#### Code Styling and Intendation ####

JavaScript Standard Style  is been used for styling and intendation.

* Run `npm test`

This executes `standard --fix` from `package.json` scripts

#### Unit Testing ####

Unit Testing is enabled using mocha and chai.

* Run: `npm test`

This executes `webpack && standard --fix es6/*` from `package.json` scripts
unit test has not been implemented for this one yet.

#### Browser Compatability ####

* Currently not supported in IE

#### Bug Reporting ####

Feel free to report any bugs. I will be more than happy to fix them right away.
