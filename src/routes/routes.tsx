import { createBrowserRouter } from "react-router-dom";
import Sidebar from "../components/sidebar";
import ErrorPage from "../pages/NotFount";

const Approuter =createBrowserRouter([
    {
        path:"/",
        element:<Sidebar/>,
        errorElement:<ErrorPage/>
    },

],
{
    basename: "/LMS-React-With-Firebase"
  }
);
export default Approuter;