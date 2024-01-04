import { Provider } from "react-redux";
import CakeContainer from "./Components/CakeContainer";
import Store from "./redux/Store";
import IceCreamContainer from "./Components/IceCreamContainer";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <CakeContainer/>
      <IceCreamContainer/>
      <Counter/>
      </Provider>
    </div>
  );
}
export default App;
