import React from "react";
import search from "/public/search.png";
import cart from "/public/shopping-cart.png";
function User(){
    return(
        <div className="header-right">
            <div className="search">
                <a href="#"><img src={search} alt="" /></a>
            </div>
            <div className="cart">
                <a href="#">
                    <img src={cart} alt="" />
                    <div class="cart-count-bubble">
                        <span class="text">0</span>
                    </div>
                </a>
            </div>
        </div>
    )
}
export default User;