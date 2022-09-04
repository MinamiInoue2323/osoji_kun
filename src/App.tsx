import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TimerPage from "./pages/TimerPage";

function App() {
  const [count, setCount] = useState(0);

  return <TimerPage />;
}

export default App;
