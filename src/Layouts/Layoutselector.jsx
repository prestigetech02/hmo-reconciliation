import { useLocation } from "react-router-dom"
import Mainlayout from "./Mainlayout"
import { UseCurrentuser } from "@/Hooks/UseAuth"
import { Outlet, Navigate } from "react-router-dom";
import SessionLoader from "@/components/SessionLoader";


function Layoutselector() {
    const location = useLocation();

    const currentpath = location.pathname
    const { data: user, isLoading } = UseCurrentuser();

    if(isLoading){
        return(
            <SessionLoader />

        )
    }

    if(!user){
        return <Navigate to="/login" replace />;
    }

    return(<Mainlayout>
            <Outlet />
        </Mainlayout> )
}

export default Layoutselector