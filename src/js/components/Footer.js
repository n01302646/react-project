import React from 'react';
import logo from 'img/common/amazon_logo.png';

const Footer = () => {
	return (
	<>
		<footer>
        <section class="first-footer footer-box row">
            <ul class="social-list">
                <li class='social-list-h'>Please follow our Social Media Handles:</li>
                <li><a href=""><img src="./img/twitter.svg" alt="facebook icon" /></a> Twitter</li>
                <li><a href=""><img src="./img/facebook.svg" alt="facebook icon" /></a> Facebook</li>
                <li><a href=""><img src="./img/youtube.svg" alt="facebook icon" /></a> Youtube</li>
            </ul>
            <ul class='site-map-footer'>
                <li>
                    <h4>Site Map</h4>
                </li>
                <li><a href="">Home</a></li>
                <li><a href="">Deals</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <ul class='sell-footer'>
                <li>
                    <h4>Sell On Amazon</h4>
                </li>
                <li><a href="">Amazon Hub</a></li>
                <li><a href="">Lockers</a></li>
                <li><a href=""> Associates</a></li>
                <li><a href="">Stores</a></li>
                <li><a href="">List your product</a></li>
            </ul>


            <ul>
                <li><a href="">Conditions of Use</a></li>
                <li><a href="">Privacy Notice</a></li>
                <li><a href="">Interest-Based Ads</a></li>
            </ul>

        </section>
        <section class="signatures">
            <p>&copy; Amazon.com</p>
        </section>

    </footer>
	</>)
}

export default Footer;