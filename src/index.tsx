import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { helloService } from "./services/HelloService";

ReactDOM.render(
    <Hello compiler={helloService.getCompiler()} framework={helloService.getFramework()} />,
    document.getElementById("example")
);