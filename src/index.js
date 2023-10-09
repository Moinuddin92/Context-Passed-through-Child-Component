import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Child from "./Child";
import SUbschild from "./Subschild";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <App>
    <Child>
      <SUbschild />
    </Child>
  </App>
);

// object
