'use client'
import { useEffect, useState } from "react";

export default function Page() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
                let data = await fetch("https://freetestapi.com/api/v1/airlines");
                 data = await data.json();
                
                setProduct(data); // Assuming data is an array of products
          
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            {product && product.length > 0 ? ( // Add conditional rendering
                product.map((item) => (
                    <h3 key={item.id}>{item.name}</h3> // Ensure each element has a unique key
                ))
            ) : (
                <p>No products available</p> // Handle the case when there are no products
            )}
        </div>
    );
}
