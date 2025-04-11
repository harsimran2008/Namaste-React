//<div id="parent">
//    <div id="child">
//         <h1>Hello H1 </h1>
//         <h2>Hello H2 </h2>
//    </div>
//    <div id="child2">
//         <h1>Hello2 H1 </h1>
//         <h2>Hello2 H2 </h2>
//    </div>
//</div>

const div = React.createElement("div", {id: "Parent"}, 
    [React.createElement("div", {id: "child"}, 
        [ React.createElement("h1", {}, "Hello H1"),
          React.createElement("h2", {}, "Hello H2")
        ] ),
    React.createElement("div", {id: "child2"}, 
        [ React.createElement("h1", {}, "Hello2 H1"),
           React.createElement("h2", {}, "Hello2 H2")
        ] )]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);