import React from "react";
import ReactDOM from "react-dom";

import Greeting from "components/Greeting";
import Header from "components/Header";
import ProductList from "components/ProductList";
import Footer from "components/Footer";
import Main from "components/Main";
import 'css/index.css';
import 'css/common.css';
import 'css/default.css';

const App = () => {

    const productArr = [
		{id: 1, name: 'JBL', price: 50, imgpath:"img/minni.jpg"},
		{id: 2, name: 'BOSE', price: 60, imgpath:"img/ipad.jpg"},
		{id: 3, name: 'APPLE', price: 70, imgpath:"img/handsoap.jpg"},
		{id: 4, name: 'SAMSUNG', price: 80, imgpath:"img/glass-guard.jpg"},
		{id: 5, name: 'XIOMI', price: 90, imgpath:"img/headphone.jpg"}
	]

	return(
        <>
			<Header />
            <Main />
            <ProductList data={productArr} />
			<Footer />
		</>
    )
}

export default App