import React from "react";
let listStyle = {color:"red"}
function Li(props, abc){
    return(
       <li>
            <a href="#" className="nav-link">{props.name}{abc.unique}</a>
            {/* <Cart/> */}
       </li>
    )
}
export default Li