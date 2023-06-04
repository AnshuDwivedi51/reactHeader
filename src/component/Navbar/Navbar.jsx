import react from "react";
import Logo from "../Logo/Logo"
import NavList from "../NavList/NavList";
import User from "../User/User";

let navbarstyle ={display:"flex",justifyContent:"space-between",alignItem:"center"};

function NavBar (){
    return (
        <div className="navbar"style={navbarstyle}>
            <Logo/>
            <NavList/>
            <User/>
        </div>
    )
}
export default NavBar ;