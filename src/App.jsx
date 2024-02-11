import "./App.css";
import ValentinePage from "./pages/valentine";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnterValentine from "./pages/EnterValentine";
import LetsMeetPage from "./pages/LetsMeetPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
    {
      path: "/lets_meet_megha",
      element: <LetsMeetPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
