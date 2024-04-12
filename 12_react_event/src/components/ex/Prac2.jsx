import { useState } from "react";

export default function Prac2() {
  const [textColor, setTextColor] = useState({
    color: "black",
    text: "검정색",
  });

  return (
    <>
      <h2 style={{ color: textColor.color }}>{textColor.text}</h2>
      <button
        onClick={() => {
          setTextColor({ color: "blue", text: "빨간색" });
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setTextColor({ color: "red", text: "파란색" });
        }}
      >
        파란색
      </button>
    </>
  );
}
