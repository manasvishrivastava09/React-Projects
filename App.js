import React from 'react';
import ReactDOM from 'react-dom/client';

//React.createElement => Object =>HTMLElement(render)

const heading = React.createElement(// this is a object
    "h1",
    {id:"heading"},
    "Hello React !"
    );

//JSX - HTML -like or XML - like syntax
//JSX - (transpiled before it reaches the JS Engine) 
//- Parcel -Babel
//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object 
//=> HTMLElement(render)

const jsxHeading = (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
    );
const root = ReactDOM.createRoot
(document.getElementById("root"));

root.render(jsxHeading);

