import React from "react";
import Li from "../Li/Li";
let menubarStyle = {display:"flex",padding:0,margin:0, listStyle:"none"};
function NavList (){
// let data = [ "Home","About", "Services"]
let data = [
    {
        image:"../public/arrow-down",
        name:"Home"
    },
    {
        
        name:"About"
    }
]
// console.log(data[0].id);
    return (
        <div className="navlist menu-bar">
            <ul className="menubar" style={menubarStyle}>
               {
                data.map((val)=>(
               <Li name = {val.name} unique ={val.id}/>
                ))
               }
               <li><a href="#" className="nav-link down-arrow-icon">Pages</a></li>
               <li><a href="#"className="nav-link down-arrow-icon">Elements</a></li>
               <li><a href="#"className="nav-link down-arrow-icon">Classes</a></li>
               <li><a href="#"className="nav-link down-arrow-icon">Sheddule</a></li>
               <li><a href="#"className="nav-link down-arrow-icon">Trainers</a></li>
               <li><a href="#"className="nav-link down-arrow-icon">Blog</a></li>

            </ul>
        </div>
    )
}
export default NavList