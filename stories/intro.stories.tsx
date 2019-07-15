import * as React from "react";
import { storiesOf } from "@storybook/react";
import useScrollLock from "../src";

function Example() {
  const [enabled, setEnabled] = React.useState(false);
  const ref = React.useRef(null);
  useScrollLock(enabled, ref);

  return (
    <div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "turn off" : "turn on"}
      </button>
      <div
        style={{
          height: "400px",
          border: "1px solid"
        }}
      >
        <div
          style={{ height: "200px", width: "200px", overflow: "auto" }}
          ref={ref}
        >
          Culpa ipsum nisi nostrud sunt duis sit ut minim exercitation. Nisi
          deserunt Lorem proident dolore anim amet aute anim culpa adipisicing.
          Quis ut quis ut eu Lorem. Laboris ad duis dolor consequat anim elit
          sunt minim dolore ea in occaecat fugiat exercitation. Adipisicing
          incididunt ipsum irure veniam in tempor. Aute ut commodo est velit
          anim consectetur voluptate laboris mollit non amet excepteur pariatur
          et. Dolore irure adipisicing nulla pariatur mollit enim cupidatat.
        </div>
        <div style={{ height: "400px" }} />
      </div>
    </div>
  );
}

storiesOf("Hello", module)
  .add("Example", () => <Example />)
  .add("Double example", () => (
    <div>
      <Example />
      <Example />
    </div>
  ));
