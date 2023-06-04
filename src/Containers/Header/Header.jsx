import React from "react";
import NavBar from "../../component/Navbar/Navbar";
let containerStyle = {width:1140,margin:"auto",background:"white"}
function Header (){
    return(
        <div className="Header" style={containerStyle}>
            <div className="container" style={containerStyle}>
                <NavBar/>
            </div>
        </div>
    )
}
export default Header;