import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "../styledTheme";
import App from "./App";
import "./styles/reset.css";
import { GlobalStyle } from "./styles/styledGlobalCss";
import { Provider } from "react-redux";
import store from "./store";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/add" element={<AddPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
