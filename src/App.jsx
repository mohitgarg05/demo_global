import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Certificates2 from "./Components/Certificates2";
import ContactUs from "./Pages/ContactUs";



function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/certificates",
      element: <Certificates2 />,
    },
    {
      path: "/contact-form",
      element: <ContactUs />,
    },
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;