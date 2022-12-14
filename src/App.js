import { Provider } from "react-redux";
import store from "./store/Store";
import Test from "./component/Test";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Test />
      </div>
    </Provider>
  );
}

export default App;
