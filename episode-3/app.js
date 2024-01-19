import react from "react";
import reactDom from "react-dom/client";

const heading = react.createElement("h1", { id: "heading" }, "Namasthe react");
const heading2 = react.createElement("h1", { id: "heading2" }, "Namasthe react1");

const root = reactDom.createRoot(document.getElementById("root"));

root.render(heading)
root.render(heading2);