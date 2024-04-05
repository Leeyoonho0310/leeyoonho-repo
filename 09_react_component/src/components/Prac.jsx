export default function Prac() {
  const helloStr = "Hello, this is first practice";

  return (
    <div
      style={{ marginTop: "32px", backgroundColor: "pink" }} // 숫자만 입력해도 인식함 (32px -> 32)
      onClick={() => {
        alert("클릭!");
      }}
    >
      {helloStr}
    </div>
  );
}
