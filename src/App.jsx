import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <div style={{ fontSize: "36px" }}>
        CRUD using react-redux, redux-toolkit
      </div>
      <Todos />
    </div>
  );
}

export default App;
