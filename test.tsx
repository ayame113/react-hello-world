/// <reference lib="dom" />
import React, { useState } from "https://esm.sh/react@17.0.2";
import { render } from "https://esm.sh/react-dom@17.0.2";

const App = () => (
  <div>
    <h3>hello world</h3>
    <Parent length={10} />
  </div>
);

const Parent = ({ length }: { length: number }) => {
  const [prefs, setPrefs] = useState({ state: new Set<number>() });
  const clear = () => setPrefs({ state: new Set() });
  const add = (n: number) => setPrefs({ state: prefs.state.add(n) });
  return (
    <>
      <View s={prefs.state} />
      <div onClick={clear}>reset</div>
      {Array.from({ length }, (_, n) => <Child n={n} add={add} />)}
    </>
  );
};
const Child = ({ n, add }: { n: number; add(n: number): void }) => (
  <div onClick={() => add(n)}>{n}</div>
);

function View({ s }: { s: Set<number> }) {
  return <div>Set ({s.size}): {`{${[...s].join(", ")}}`}</div>;
}

render(<App />, document.querySelector("#root"));
