import { render } from "react-dom";

import { Star } from "../Star";

test("renders a start", () => {
  const div = document.createElement("div");
  render(<Star />, div);
  expect(div.querySelector("svg")).toHaveAttribute("id", "star");
});
