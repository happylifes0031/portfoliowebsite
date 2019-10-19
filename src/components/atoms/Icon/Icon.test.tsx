import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import "jest-styled-components";

import Icon from "./Icon";
expect.extend(matchers);

describe("Icon", () => {
  const icon = renderer
      .create(<Icon active={true} element={{ icon: "blender", range: "12" }} />)
      .toJSON();

  it("Renders a snapshot", () => {
    expect(icon).toMatchSnapshot();
  });

  it("Icon has filter at 0%, when active", () => {
    expect(icon).toHaveStyleRule("filter", "grayscale(0%)");
    expect(icon).not.toHaveStyleRule("filter", "grayscale(90%)");
  });

  it("Scales image inside the icon", () => {
    const image = icon.children[0];
    expect(image).toHaveStyleRule("width", "50px");
    expect(image).not.toHaveStyleRule("width", "40px");
  });
});
