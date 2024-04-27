import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addarts",
        element: <AddArts></AddArts>
      },
      {
        path: "/artdetails/:_id",
        element: <ArtDetails></ArtDetails>,
        loader: () => fetch("http://localhost:3000/arts"),
      },
      {
        path: "/allarts&crafts",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch("http://localhost:3000/arts"),
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
  </React.StrictMode>
);