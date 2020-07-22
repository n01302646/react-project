import React from "react";
import test from "img/test.png";

const Header = () => {
	return  (
			<>
			<header class="header">
            <h1 class="hidden">Assignment 1 setup</h1>
            
            <nav class="navigation row" id="navigation">
                
                <a href="/"><img src="/images/amazon_logo.png" alt="Amazon Logo" class="navigation__website_logo" /></a>

                <a href="/"><img src="/images/amazon_a_logo.png" alt="Amazon Logo" class="navigation__website_logo--mobile-view" /></a>

                <ul class="navigation__ul-listing row" id="navigation__ul-listing">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="text-capitalize">deal store</a></li>
                    <li><a href="#" class="text-capitalize">best sellers</a></li>
                    <li><a href="#" class="text-capitalize">products</a></li>
                    <li><a href="#" class="text-capitalize">login</a></li>
                    <li><a href="#" class="text-capitalize">sign up</a></li>
                </ul>
               
                 <section class="section-hamburger">
                    <h2 class="hidden">section-hamburger</h2>
                    <img src="/images/hamburger.png" alt="hamburger menu" class="hamburger-menu" id="hamburger-menu" />
                </section>
 
            </nav>
        </header>
            </>
		)
}

export default Header;