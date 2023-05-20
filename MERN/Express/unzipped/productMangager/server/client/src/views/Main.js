import React, { useEffect, useState } from 'react'
import ProductForm from '../component/CreatePage';
import AllProducts from '../component/AllProduct';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/all/')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    
    const removeFromDom = productId => {
        setProducts(products.filter(products => products._id !== productId))}

    const addToDom = product => {setProducts([...products, product])}

    return (
        <div>
            <ProductForm addToDom = {addToDom}/>
            <hr />
            {loaded && <AllProducts products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;

