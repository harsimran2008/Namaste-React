import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", {id: "Parent"}, 
    [React.createElement("div", {id: "child", key:"child1"}, 
        [ React.createElement("h1", {key:"h1-1"}, "Hello H1 tag "),
          React.createElement("h2", {key:"h1-2"}, "Hello H2 tag jii")
        ] ),
    React.createElement("div", {id: "child2", key:"child2"}, 
        [ React.createElement("h1", {key:"h2-1"}, "Hello2 H1"),
           React.createElement("h2", {key:"h2-2"}, "Hello2 H2")
        ] )]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);