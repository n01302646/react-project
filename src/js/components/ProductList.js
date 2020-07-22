import React from 'react';
import Product from "components/Product";



const ProductList = ({data}) => {
    // Mapped elements MUST have a unique "key" attribute
    const productsArr = data.map(prod => <Product key={prod.id} name={prod.name} price={prod.price} imgpath={prod.imgpath} />)
    
	return (
        <main>
			<section class="cat_section" id="category">
				<h2 class="">Categories</h2>
				<div class="category-grid-box row">
					{productsArr}
				</div>
			</section>

        </main>
    )
}



export default ProductList;