import { expect } from "chai";

import { helloService } from "../../src/services/HelloService";

describe("HelloService", function () {
  it("getCompiler returns string", function () {
    expect(helloService.getCompiler()).to.be.a("string");
  });
  it("getFramework returns string", function () {
    expect(helloService.getFramework()).to.be.a("string");
  });
});