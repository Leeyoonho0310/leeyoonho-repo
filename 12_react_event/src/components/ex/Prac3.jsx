import { useState } from "react";

export default function Prac3() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <br />
      <br />

      {display && <h2>안녕하세용!</h2>}
      <button onClick={() => setDisplay(!display)}>
        {display ? "사라져라" : "보여라"}
      </button>
    </>
  );
}
