import Body from "./Components/Body";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react"
import appStore from "./redux/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Analytics />
      {" "}
      <Body />
    </Provider>
  );
}

export default App;
