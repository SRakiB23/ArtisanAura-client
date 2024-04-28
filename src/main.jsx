import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Registration/Register";
import AddArts from "./pages/AddArts/AddArts";
import ArtDetails from "./pages/ArtDetails/ArtDetails";
import AllArtCraft from "./pages/AllArtCraft/AllArtCraft";
import PrivateRoute from "./routes/PrivateRoute";
import MyArtCraft from "./pages/MyArtCraft/MyArtCraft";
import UpdateDetails from "./pages/MyArtCraft/UpdateDetails";
import AllArtCraftSub from "./pages/AllArtCraftSub/AllArtCraftSub";
import AllArtCraftSubCategory from "./pages/AllArtCraftSub/AllArtCraftSubCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/arts"),
      },
      {
        path: "/artscrafts",
        element: <AllArtCraftSub></AllArtCraftSub>,
      },
      {
        path: "/artscraftsubcategory/:subcategory",
        element: <AllArtCraftSubCategory></AllArtCraftSubCategory>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addarts",
        element: (
          <PrivateRoute>
            <AddArts></AddArts>
          </PrivateRoute>
        ),
      },
      {
        path: "/artdetails/:_id",
        element: (
          <PrivateRoute>
            <ArtDetails></ArtDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/arts"),
      },
      {
        path: "/allarts&crafts",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch("http://localhost:3000/arts"),
      },
      {
        path: "/myarts&crafts",
        element: (
          <PrivateRoute>
            <MyArtCraft></MyArtCraft>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatedetails/:_id",
        element: (
          <PrivateRoute>
            <UpdateDetails></UpdateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/arts"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
