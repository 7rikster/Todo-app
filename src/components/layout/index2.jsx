import { Outlet } from "react-router-dom";
import Today from "../today";

function Layout2() {
    return ( 
        <div>
            <Today/>
            <Outlet/>
        </div>
     );
}

export default Layout2;