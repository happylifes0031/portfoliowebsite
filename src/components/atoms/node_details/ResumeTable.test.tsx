import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import "jest-styled-components";

import ResumeTable from "./ResumeTable";
expect.extend(matchers);

describe("ResumeTable", () => {
  it("Renders as expected", () => {
    const resumeTable = renderer
      .create(<ResumeTable from={''} till={''} role={''} skills={''} />)
      .toJSON();
    expect(resumeTable).toMatchSnapshot();
  });
});
