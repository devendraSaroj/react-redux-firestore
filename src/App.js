import { Provider } from "react-redux";
import Dashboard from "./screens/Dashboard/Dashboard";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
