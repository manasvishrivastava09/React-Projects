# my React project 

# Parcel

-Dev Build
-Local Server
-HMR - Hot Module Replacement
-File Management Algorithm - written in C++
-As parcel is caching things for us.in folder.
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent hashing
-Code Splitin
-Differential bundling
-DiAGNOSTICS- better error suggestions.
-gives a way to host in https
-Tree sharing - remove unused code for us.
-diff build for dev and production.

-Bundlers along with react make it optimized and fast
# BROWSERSLIST
https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

# Yummy
/**
 * Header
 *  -Loop
 *  -Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *      -RestaurantsCard
 *          -Img
 *          -Name of Res, Star Rating, cusine, delery tie
 * Footer
 *  -Copyright
 *      -Links
 *      -Address
 *  -Contact
 * 
 */

 # Two types of export/import

 - Default Export/Import

 export default Component;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";


 # Hooks

 (Normal javascript utility function)
 useState - Super powerful React variables in React
            We import it using nameimport {}
            import {useState} from 'react';
            Its a state variable  as it maintains the state of our component

 useEffect

 # Types of routing
 # 1-serverside routing
 Server side routing means , make a netwrk call, the about us page is coming from server.

  # 2-client side routing-
 this is client side routing , we are not making any network calls  , because when i load the app it already has the code for about us. it just loads the component.
 If i go to contact page it loads the contact page component over here. it does not make any network calls, 
 the only network call is made when i make  a network call in the api.

 Single page application - single page just the components getting interchanged.

 # dynamic route

 we have dynamic route for every restaurant that we have
  after that dynamic route , api call has been made.

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

#### Types of testing a (developer) can do

- Unit testing - 
test one react component in isolation

- Integration Testing - 
testing the integration of component

- End to end testing -e2e testing - 
testing the application when the user start the website till the user closes the website- tools syplus, selenium, puppetier
  

  we use react testing library
  build on top of DOM testing library
parcel is bundler
Routing - react router dom
Testing - react testing library
state management - redux
bundling - parcel

# React Testing library uses JEST

# Setting up testing in our app
- Install React Testing Library
- Install Jest
- Install babel dependencies
- Configure Babel
- (Babel is a transpiller and parcel uses it)
- Configure Pracel Config file to disable default babel transpilation
- Jest configuration
# (npm run test)

jsdom when you write/run test cases ther is no server/browser running, so they will need a runtime.

-Jest - npx jest --init
- Install jsdom library

__ = dunder

create a folder__tests__ anywhere inside the project folder.
the files insideit should be of the form

fileName.test.ts
fileName.test.js
fileName.spec.ts
fileName.spec.js

- Install @babel/preset-react to make JSX run in test cases.
- Include @babel/preset-react in babel config
- to add ToBeInTheDocument 
@testing-library/jest-dom