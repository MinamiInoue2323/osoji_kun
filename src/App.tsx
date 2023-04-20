import React from "react";
import TimerPage from "./pages/TimerPage";
import PlacePage from "./pages/PlacePage";
import ConfigPage from "./pages/ConfigPage";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "./components/Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import LoginPage from "./pages/LoginPage";
import {
  RouterAuthenticatedCheck,
  RouterHasAuthenticated,
} from "./router/RouterAuthenticateConfig";

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
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <Routes>
              <Route
                path="/"
                element={<RouterAuthenticatedCheck component={<Outlet />} />}
              >
                <Route
                  path="/timer"
                  element={<RouterHasAuthenticated component={<TimerPage />} />}
                />
                <Route
                  path="/place"
                  element={<RouterHasAuthenticated component={<PlacePage />} />}
                />
                <Route
                  path="/config"
                  element={
                    <RouterHasAuthenticated component={<ConfigPage />} />
                  }
                />
                <Route
                  index
                  element={
                    <>
                      <Header isLogin={false} />
                      <LoginPage />
                    </>
                  }
                />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
