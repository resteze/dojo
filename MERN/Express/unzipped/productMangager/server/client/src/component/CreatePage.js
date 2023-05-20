import React, { useState } from 'react'
import axios from 'axios'
const ProductForm = (props) => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDesc, setProductDesc] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/", { productName, productPrice, productDesc })
            .then(res => props.addToDom(res.data))
            .catch(err => console.log(err))

    }
    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text' value={props.productName} onChange={(e) => { setProductName(e.target.value) }} />
                <label>Price</label>
                <input type='text' value={props.productPrice} onChange={(e) => { setProductPrice(e.target.value) }} />
                <label>Description</label>
                <input type='text' value={props.productDesc} onChange={(e) => { setProductDesc(e.target.value) }} />
                <input type='submit' value='Create' />
            </form>
        </div>
    )
}
export default ProductForm
