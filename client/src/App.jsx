import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddData from "./pages/AddData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddData />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
