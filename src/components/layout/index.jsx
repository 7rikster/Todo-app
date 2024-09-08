import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Today from "../today";



function Layout() {
    return ( <div>
        <Navbar/>
        <Outlet/>
    </div> );
}

export default Layout;