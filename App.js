import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = ()=>(
    <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
    );

    const elem =<span>React Elem</span>;

    const ElementReact=(
        <h1 className="head" tabIndex="5">
            {elem}
        Namaste Element
        </h1>
    );
    const test=100;

    //Component Composition

    const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        <h2>{test}</h2>
        <h2>{ElementReact}</h2>
        <h1>Namaste React Functional component</h1>
    </div>
);

const root = ReactDOM.createRoot
(document.getElementById("root"));

root.render(<HeadingComponent/>);

