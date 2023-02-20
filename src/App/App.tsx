import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Navbar from "../components/Navbar";
import Hompage from "../pages/Hompage/Hompage";
import "./App.scss";
const NavbarWrapper = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Hompage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
