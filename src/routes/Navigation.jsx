import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ItemDetailContainer,
  ItemListCategory,
  ItemListContainer,
} from "../pages";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ItemListContainer />,
    },
    {
      path: "/item/:idProduct",
      element: <ItemDetailContainer />,
    },
    {
      path: "/category/:id",
      element: <ItemListCategory />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
