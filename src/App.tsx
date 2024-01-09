import "./App.css";
import { HashRouter } from "react-router-dom";
import { Router } from "./router";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <HashRouter>
        <Router />
      </HashRouter>
    </ContextProvider>
  );
}

export default App;
