import { createBrowserRouter, RouterProvider } from "react-router"
import RootLayOut from "./components/RootLayOut";
import Home from "./features/home/Home.jsx";
import Login from "./features/auth/login.jsx";
import Register from "./features/auth/register.jsx";
import AdminPage from "./features/admin/AdminPage.jsx";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />
        },

        {
          path: 'admin',
          element: <AdminPage />
        },



        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }

      ]
    },


  ]);





  return <RouterProvider router={router} />
}
