  
import React from 'react';
import test from 'img/minni.jpg';

const Product = ({name,price, imgpath}) => {
	
	
	const ip = "img/"+ imgpath;
	
	//console.log("ip : "+ ip);
	const sayHello = (event) => {
		alert(`${name} has been added to your cart`)
	}
	
	return (
		<>

  <div>
    <div>
        <ul >
            <li><a href="">{name}</a></li>
            <li><a href="/productPage"><img src={test} alt={name} id='product-imagep' /></a></li>
            <li><a href="/productPage">See More</a></li>
        </ul>
        <button  id='add-button' onClick={sayHello}>Add to cart</button>
    </div>
        </div>
		</>
	)
}
export default Product;