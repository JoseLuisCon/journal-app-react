import { createBrowserRouter } from "react-router";
import { LoginPage, RegisterPage } from "../Auth/pages";
import { JournalPage } from "../journal/pages/JournalPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: JournalPage,
  },
  {
    path: "auth",
    children: [
      {
        path: "",
        Component: LoginPage,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "*",
        Component: LoginPage,
      },
    ],
  },
]);
