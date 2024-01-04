const parent = React.createElement("div", { id: "child" }, [
  React.createElement("h1", { id: "hiTag" }, "H1 tag is in action"),
  React.createElement("h2", { id: "h2Tag" }, "H2 tag is in action"),
]);

console.log(parent);
const renderer = ReactDOM.createRoot(document.getElementById("root"));

renderer.render(parent);
