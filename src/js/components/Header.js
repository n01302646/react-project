import React from "react";
import logo from "img/logo-amazon.png";
const Header = () => {
	return  (
			<>
			 <header>
        <div class="header-wrapper">
            <div class="logo-wrapper">
                <a href="/"><img src={logo} alt="amazon-logo" class="img-logo" /></a>
                <div class="deals-box">
                    <a href="#">Today's Deals: Electronic & Home Appliances</a>
                </div>
            </div>

            <nav class="main-nav">
                <ul>
                    <li class="deal-headers"><a href="">Mega Deals | Latest Deals</a></li>
                    <li><button type="button"><a href="/login">Sign-in</a></button></li>
                    <li><button><a href="/registration">Sign-up</a></button></li>
                </ul>
            </nav>
        </div>
    </header>
            </>
		)
}

export default Header;