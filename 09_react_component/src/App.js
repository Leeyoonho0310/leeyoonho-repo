import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import Prac from "./components/Prac";

function App() {
  return (
    <div className="App">
      {/* 불러와 사용하는 방법 */}
      <ClassComponent />
      {/* 불러와 사용하는 방법2 */}
      <ClassComponent></ClassComponent>
      {/* 함수형 컴포넌트 */}
      <FunctionComponent />

      <Prac />
    </div>
  );
}

export default App;
