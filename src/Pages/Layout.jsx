import { Outlet } from "react-router"
import NavBar from "../Components/Navbar"
import Footer from "../Components/Footer"
export default function(){
    return(
        <>
        <NavBar/>
        {/* <Packages/> */}
        <Outlet/>
        <Footer/>
        </>
    )
}