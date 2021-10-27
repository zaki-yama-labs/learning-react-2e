import { render } from "react-dom";

import { GitHubUser } from "./GitHubUser";
import ColorProvider from "./ColorProvider";

render(
  <ColorProvider>
    <GitHubUser login="zaki-yama" />
  </ColorProvider>,
  document.getElementById("main")
);
