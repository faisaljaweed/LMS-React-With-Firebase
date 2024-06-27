import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/NotFount";
import Root from "../pages/root";
import Students from "../pages/students";
import Teacher from "../pages/teacher";

const Approuter =createBrowserRouter([
    {
        path:"",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"",
                element:<Students/>,
                errorElement:<ErrorPage/>
            },
            {
                path:"teacher",
                element:<Teacher/>,
                errorElement:<ErrorPage/>
            }
        ]
    },

],
{
    basename: "/LMS-React-With-Firebase"
  }
);
export default Approuter;