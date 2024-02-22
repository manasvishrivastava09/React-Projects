import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const heading = (
    <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
    );

//React Component
//Class Based Component - OLD
//Functional Component - NEW

//React Functional Component

const HeadingComponent=()=>(
    <div id="container">
        <h1>Namaste React Functional component</h1>
    </div>

);

const root = ReactDOM.createRoot
(document.getElementById("root"));

root.render(<HeadingComponent/>);

