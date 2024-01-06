import React from "react";
import ReactDOM from "react-dom/client";

// Original React script
// const parent = React.createElement("div", { id: "child" }, [
//   React.createElement("h1", { id: "hiTag" }, "H1 tag is in action"),
//   React.createElement("h2", { id: "h2Tag" }, "H2 tag is in action"),
// ]);

// JSX Code
// const parent = <div id="hiTag"> This is React from JSX..!!</div>;

// Functional Component and Functional component composition.
const RenderEle = () => <h2 id="h2Tag">Render component in element...!!!</h2>;

const title = (
  <h1 className="dummy-classs">
    <RenderEle />
    This is coming from Child..!!!
  </h1>
);

const Parent = () => {
  return (
    <div id="some">
      <h1 id="hiTag" className="dummy-classs">
        This is coming from Parent...!!!
      </h1>
      {title}
    </div>
  );
};
const renderer = ReactDOM.createRoot(document.getElementById("root"));
renderer.render(<Parent />);
