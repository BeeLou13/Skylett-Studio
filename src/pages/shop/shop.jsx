import React from "react";
import { PRODUCTS } from "../../Products"
import { Product } from "./product"
// import { background } from "../../assets/spirals.jpg"
import "./shop.css"

export const Shop = () => {
    return ( 
     <div className="shop">
        <div className="shopTitle">
            <h1>
                Skylett Studios
            </h1>
            <h6>
                Crochet, Stickers, and more...
            </h6>
        </div>
        <div className="products"> 
            {PRODUCTS.map((product) => <Product data={product}/>)}
        </div>
    </div>
    )
}