import * as React from "react";
import { expect } from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { Hello } from "../../src/components/Hello";

describe("<Hello />", function () {
  it("renders", function () {
    const hello = ReactTestUtils.renderIntoDocument(<Hello compiler="Compiler" framework="Framework" />) as Hello;
    expect(ReactTestUtils.isCompositeComponent(hello)).to.equals(true);
  });
});