import React from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = (props) => {
    const { removeFromDom } = props
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/${productId}`)
            .then(res => { removeFromDom(productId) })
            .catch(err => console.error(err))
    }
    return (
        <div>
            {props.products.map((product, i) =>
                <p key={i}>
                    <Link to={`/api/${product._id}/`}>{product.productName}</Link>
                    |
                    <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                </p>
            )}
        </div>
    )
}
export default AllProducts