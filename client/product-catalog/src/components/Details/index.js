import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../util/data";

const Details = () => {
    const params = useParams();
    const [product, setProduct] = useState()
    useEffect(() => {
        if (!product) {
            get(`/products/${params.id}`)
                .then(res => setProduct(res));
        }
        console.log(product)
    })
    return (
        <div id="details">
            <h1>
                {product.name}
            </h1>
            <ul>
                <li>Quantity - {product.quantity}</li>
                <li>Price - {product.price}</li>
            </ul>
        </div>
    )
}

export default Details;