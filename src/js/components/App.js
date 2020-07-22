import React from "react";
import ReactDOM from "react-dom";

import Greeting from "components/Greeting";
import Header from "components/Header";
import ProductList from "components/ProductList";
import Footer from "components/Footer";
import 'css/index.css';

const App = () => {

    const productArr = [
		{id: 1, name: 'Iphone 8', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 2, name: 'Iphone 7', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 3, name: 'Iphone X', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 4, name: 'Iphone XS Max', price: 200, imgpath:"products/iphone8.jpg"},
		{id: 5, name: 'Iphone 11', price: 200, imgpath:"products/iphone8.jpg"}
	]

	return(
        <>
			{/* This is an example comment */}
			<Header />
            <PromotionalImage />
            <ProductList data={productArr} />
			<Footer />
		</>
    )
}

export default App