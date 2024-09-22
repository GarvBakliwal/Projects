import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios, { all } from 'axios'
import '../style/AllProducts.css'
const AllProducts = () => {

    let [products, setProducts] = useState();
    async function getProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            // console.log(response);
            const allProducts = response.data;
            setProducts(allProducts);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    console.log(products);

    return (
        <div className='wrapper'>
            {/* <Card name= 'Tshirt' image = "https://pbs.twimg.com/profile_images/1398739295863717888/zJGeUaYY_200x200.jpg" description="Traditionally, manga stories are read from right to left and from top to bottom, in the same way as Japanese writing. Japanese was written in vertical columns, which these columns were read from top to bottom and from right to left"  /> */}
            {products?.map((items) => (
                <div id="product-card">
                    <Card name={items.title} image={items.image} price={items.price} />
                </div>
            ))}
        </div>
    )
}

export default AllProducts