import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "./styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { router } from "./router/AppRouter";
import { AppTheme } from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  </StrictMode>,
);
