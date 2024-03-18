import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root";
import { ErrorPage } from "../pages/Error/ErrorPage";
// import { Layout } from "./components/Root";
import { MainContent } from "../pages/Main/MainContent";
import { OrderPage } from "../pages/Order/OrderPage";
import { ContactPage } from "../pages/Contact/ContactPage";
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
        element: <OrderPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
    ],
  },
]);
