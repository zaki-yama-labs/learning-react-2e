import { render } from "react-dom";

import { App } from "./App";
import ColorProvider from "./ColorProvider";

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("main")
);
