import { Outlet } from "react-router-dom";
import Sidebar from "./Dashboard/sidebar";

const Root =()=>{
    return(
        <div className="flex ">
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
        </div>
    );
}
export default Root;