// yat na bhava kay kr tab 

import Product from './Product.jsx'

export default function ProductTab()
{
    let desc = ["good" ,"Best" ,"Top"];

  //  let data =  {a: "Besta ", b:"globalThis ",c: "mainsj"}

    return(
        <>
            <Product Title = "Phone" Price = {10000} Descriptions = {desc} ></Product>
            <Product Title = "Laptop" Price = {40000}  Descriptions = {desc}  ></Product>
            <Product Title = "Pen"  Price = {10}  Descriptions = {desc} ></Product>
        </>
    )
}