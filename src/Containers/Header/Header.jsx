import React from "react";
import NavBar from "../../component/Navbar/Navbar";
import Event from "../../component/Event/Event";
let containerStyle = {width:1140,margin:"auto",background:"white"}
function Header (){
    return(
        <div className="Header" style={containerStyle}>
            <div className="container" style={containerStyle}>
                <NavBar/>
                <Event />
            </div>
        </div>
    )
}
export default Header;