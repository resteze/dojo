import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDesc, setProductDesc] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}/`)
            .then(res => { const product = res.data; setProductName(product.productName); setProductPrice(product.productPrice); setProductDesc(product.productDesc)})
    }, [id])
    const updateProduct = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}/`, {productName, productPrice, productDesc})
            .then(res => navigate(`/api/${id}`))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <label>Title</label>
                <input type='text' value= {productName} onChange={(e)=>{setProductName(e.target.value)}}/>
                <label>Price</label>
                <input type='text' value= {productPrice} onChange={(e)=>{setProductPrice(e.target.value)}}/>
                <label>Description</label>
                <input type='text' value= {productDesc} onChange={(e)=>{setProductDesc(e.target.value)}}/>
                <input type='submit' value='Create'/>
            </form>
        </div>
    )
}
export default Update