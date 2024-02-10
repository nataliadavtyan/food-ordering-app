import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { ErrorPage } from "../pages/Error/ErrorPage";
// import { Layout } from "./components/Root";
import { MainContent } from "../pages/Main/MainContent";
import { Order } from "../pages/Order/Order";
import { Contact } from "../pages/Contact/Contact";
import { MyProfile } from "../pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);
