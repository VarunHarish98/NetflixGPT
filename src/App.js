import Body from "./Components/Body";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react"
import appStore from "./redux/appStore";
import ReactGA from "react-ga4";
const GA_ID = "G-W9VPZQVQVY"
ReactGA.initialize(GA_ID);
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
