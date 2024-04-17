import CustomHook from "./componets/CustomHook";
import UseCallback1 from "./componets/UseCallback1";
import UseCallback2 from "./componets/UseCallback2";
import UseMemo from "./componets/UseMemo";
import UseReducer from "./componets/UseReducer";

function App() {
  return (
    <div className="App">
      <UseMemo />
      <UseCallback1 />
      <UseCallback2 />
      <UseReducer />
      <CustomHook />
    </div>
  );
}

export default App;
