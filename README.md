# *TSN Question Set*

This application is designed to be used to record new events in the TSN project. These events are saved in the TSN project for reporting and documentation.

## Setup 

### Dependencies

* NPM Packages used in Production
  * [Material-UI](https://www.npmjs.com/package/@material-ui/core)
  * [Final Form](https://www.npmjs.com/package/final-form)
  * [Final Form Arrays](https://www.npmjs.com/package/final-form-arrays)
  * [Immutable](https://www.npmjs.com/package/immutable)
  * [Moment](https://www.npmjs.com/package/moment)
  * [Nearley](https://www.npmjs.com/package/nearley)
  * [ReactJS](https://www.npmjs.com/package/react)
  * [React Datepicker](https://www.npmjs.com/package/react-datepicker)
  * [React Dom](https://www.npmjs.com/package/react-dom)
  * [React Final Form](https://www.npmjs.com/package/react-final-form)
  * [React Final Form Arrays](https://www.npmjs.com/package/react-final-form-arrays)
  * [React Scripts TS](https://www.npmjs.com/package/react-scripts-ts)
* Tools
  * node < version 10
  * npm < version 6
  * yarn

*Note: Development packages are not listed here.*

### Installation

* Install node, npm, and yarn
* `$ cd` into the project directory
* Run `$ yarn` 

### Getting started

After dependencies are installed, run `$ yarn start` from inside the root directory to start up the development server.

If building for production, run `$ yarn build` and copy the static JavaScript into TSN application.

## Usage

TSN Workflow
* User clicks on 'Add New Event'
* TSN Application queries the database for the user's organization's question set
* TSN Application saves the QuestionSet as a global variable accessible to our application
* User fills out questions by following the flow of the form.
* User clicks the submit button.
* Our application calls the TSN application's submit button to save in the database

## Main Component

We have one stateful component, named QuestionSet. This component renders the form and handles the current question as a state variable. All other components are functional components and make up the QuestionSet components.

## Team

* Peter Yu peteryu@tamhsc.edu
* Cory Thompson cthompson@tamhsc.edu
* Ledet Awano
* Shashwat Kumar
* Jigna Reshamwala

**TSN Shoutouts** 
* Raul Jimenez rjimenez@tamhsc.edu
* Jose Manriquez manriquez@tamhsc.edu


## Errors and bugs

Report all bugs and issues in [JIRA](http://jira.66.64.75.52.xip.io/projects/TQS/summary).