import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams, Link} from "react-router-dom"

const Product = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            {
                product?
                <div> <h1>{product.productName}</h1>
                <p>Price: ${product.productPrice}</p>
                <p>Description: {product.productDesc}</p>
                <Link to = {`/api/update/${product._id}`}>Edit</Link> </div>:
                <h1> Unable to Find </h1>
            }
            
        </div>
    )
}
export default Product