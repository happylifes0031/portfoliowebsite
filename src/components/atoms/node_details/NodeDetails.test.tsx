import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import "jest-styled-components";

import NodeDetails from "./NodeDetails";
expect.extend(matchers);

describe("ResumeTable", () => {
  it("Renders as expected", () => {
    const resumeTable = renderer
      .create(<NodeDetails from={''} till={''} role={''} skills={''} isVisible={true}/>)
      .toJSON();
    expect(resumeTable).toMatchSnapshot();
  });
});
