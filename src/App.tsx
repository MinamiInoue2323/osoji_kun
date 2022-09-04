import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TimerPage from "./pages/TimerPage";
import PlacePage from "./pages/PlacePage";
import ConfigPage from "./pages/ConfigPage";

function App() {
  const [count, setCount] = useState(0);

  return <ConfigPage />;
}

export default App;
