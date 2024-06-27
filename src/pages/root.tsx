import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const Root =()=>{
    return(
        <>
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
        </>
    );
}
export default Root;