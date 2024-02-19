/* 
<div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>

    </div>
    <div id="child2">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>

    </div>
</div> 
*/

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag")
        ]),
    React.createElement("div",{id:"child2"},[
            React.createElement("h3",{},"This is h3 tag"),
            React.createElement("h4",{},"This is h4 tag")
        ]),
]);

// const heading = React.createElement(// this is a object
//     "h1",
//     {id:"heading", xyz:"abc"},
//     "Hello World from React !"
//     );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);