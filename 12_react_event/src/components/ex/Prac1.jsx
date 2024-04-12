import { useState } from "react";

export default function Prac1() {
  const [msg, setMsg] = useState("Hello World!");

  return (
    <>
      <h2>{msg}</h2>
      <button onClick={() => setMsg("Goodbye World!")}>클릭!</button>
    </>
  );
}
