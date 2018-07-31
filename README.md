# *Dynamic UI*

This application has been designed to be a reference for creating a dynamic UI application from JSON data.

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

If building for production, run `$ yarn build` and copy the static JavaScript into DynamicUI application.

## Usage

Vehicle Inquiry Form Workflow
* User fills information on the form
* Navigates through the form using the Next and Back buttons
* User clicks on the Submit buttons
* A summary of answers is generated, which can then be used by other applications or stored in a DB

## Main Component

We have one stateful component, named QuestionSet. This component renders the form and handles the current question as a state variable. All other components are functional components and make up the QuestionSet components.

## Contributed By

* Prof. Hank Walker
* Shashwat Kumar
