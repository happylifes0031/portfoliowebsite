import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import "jest-styled-components";

import TechColophon from "./TechColophon";

expect.extend(matchers);

describe("TechColophon", () => {
    it("Renders as expected", () => {
        const techColophon = renderer
            .create(<TechColophon />)
            .toJSON();
        expect(techColophon).toMatchSnapshot();
    });
});
