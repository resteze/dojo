import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { set } from "mongoose";

const Main = (props) => {
    const [stores, setStores] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setStores(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const deleteStore = (storeId) => {
        axios.delete(`http://localhost:8000/store/${storeId}`)
            .then(res => { removeFromDom(storeId) })
            .catch(err => { console.log(err) })
    }

    const removeFromDom = storeId => {
        setStores(stores.filter(stores => stores._id !== storeId))
    }

    return (
        <div>
            <h1>Store Finder</h1>
            <h3>Find stores in your area!</h3>
            <table>
                <thead>
                    <th>Store</th>
                    <th>Store Number</th>
                    <th>Open</th>
                    <th>Remove</th>
                </thead>
                {stores.map((store, i) =>
                    <tbody>
                        <td><Link to={`/store/${store._id}`}>{store.storeName}</Link></td>
                        <td>{store.storeNumber}</td>
                        <td>{store.open}</td>
                        <td><button onClick={(e) => { deleteStore(store._id) }} >Delete</button></td>
                    </tbody>
                )}
            </table>
            <a href="/store/add">
                <button > Cant find your store? </button>
            </a>
        </div>
    )
}

export default Main;