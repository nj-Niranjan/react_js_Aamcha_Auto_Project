import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Contact } from "./pages/Contact";
import { BookRide } from "./components/Layout/UI/BookRide";
import { Careers } from "./components/Layout/UI/Careers";
import { Blog } from "./components/Layout/UI/Blog";
import { PressPage } from "./components/Layout/UI/PressPage";
import { Safety } from "./components/Layout/UI/Safety";

// Creating the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",  // Changed to lowercase
        element: <About />,
      },
      {
        path: "/contact",  // Changed to lowercase
        element: <Contact />,
      },
      {
        path: "/book-ride",  // Make sure this is matched in navigation
        element: <BookRide />,
      },
      {
        path: "/careers",  // Changed to lowercase
        element: <Careers />,
      },
      {
        path: "/blog",  // Changed to lowercase
        element: <Blog />,
      },
      {
        path: "/safety",  // Changed to lowercase
        element: <Safety />,
      },
      {
        path: "/press",  // Changed to lowercase
        element: <PressPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
