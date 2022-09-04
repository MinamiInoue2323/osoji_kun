import "./App.css";
import TimerPage from "./pages/TimerPage";
import PlacePage from "./pages/PlacePage";
import ConfigPage from "./pages/ConfigPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TimerPage />} />
          <Route path="/place" element={<PlacePage />} />
          <Route path="/config" element={<ConfigPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
