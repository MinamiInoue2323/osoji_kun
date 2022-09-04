import React from "react";
import TimerPage from "./pages/TimerPage";
import PlacePage from "./pages/PlacePage";
import ConfigPage from "./pages/ConfigPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
          <Header />
          <Routes>
            <Route path="/" element={<TimerPage />} />
            <Route path="/place" element={<PlacePage />} />
            <Route path="/config" element={<ConfigPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
