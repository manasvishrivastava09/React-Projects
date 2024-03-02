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

 # types of routing
 1-serverside routing
 Server side routing means , make a netwrk call, the about us page is coming from server.

 2-client side routing-
 this is client side routing , we are not making any network calls  , because when i load the app it already has the code for about us. it just loads the component.
 If i go to contact page it loads the contact page component over here. it does not make any network calls, 
 the only network call is made when i make  a network call in the api.

 Single page application - single page just the components getting interchanged.

 # dynamic route

 we have dynamic route for every restaurant that we have
  after that dynamic route , api call has been made.

  
