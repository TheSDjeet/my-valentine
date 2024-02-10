import "./App.css";
import ValentinePage from "./pages/valentine";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnterValentine from "./pages/EnterValentine";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ValentinePage />,
    },
    {
      path: "/shubha_loves_megha",
      element: <EnterValentine />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
