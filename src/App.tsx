import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NamiiInicio } from "./screens/NamiiInicio/NamiiInicio";
import { NamiiInicioMvil } from "./screens/NamiiInicioMvil/NamiiInicioMvil";
import { NamiiInicioTablet } from "./screens/NamiiInicioTablet/NamiiInicioTablet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NamiiInicio />,
  },
  {
    path: "/namii-u183-inicio",
    element: <NamiiInicio />,
  },
  {
    path: "/namii-u183-inicio-u183-tablet",
    element: <NamiiInicioTablet />,
  },
  {
    path: "/namii-u183-inicio-u183-movil",
    element: <NamiiInicioMvil />,
  },
  {
    path: "*",
    element: <NamiiInicio />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
