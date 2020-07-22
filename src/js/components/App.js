import React from "react";
import ReactDOM from "react-dom";

import Greeting from "components/Greeting";
import Header from "components/Header";
import ProductList from "components/ProductList";
import Footer from "components/Footer";
import 'css/index.css';
import 'css/common.css';
import 'css/default.css';

const App = () => {

    const productArr = [
		{id: 1, name: 'JBL', price: 50, imgpath:"products/hp.jpg"},
		{id: 2, name: 'BOSE', price: 60, imgpath:"products/hp.jpg"},
		{id: 3, name: 'APPLE', price: 70, imgpath:"products/hp.jpg"},
		{id: 4, name: 'SAMSUNG', price: 80, imgpath:"products/hp.jpg"},
		{id: 5, name: 'XIOMI', price: 90, imgpath:"products/hp.jpg"}
	]

	return(
        <>
			<Header />
            <PromotionalImage />
            <ProductList data={productArr} />
			<Footer />
		</>
    )
}

export default App