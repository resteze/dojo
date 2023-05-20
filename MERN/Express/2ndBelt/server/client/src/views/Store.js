import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Store = (props) => {
    const [store, setStore] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/store/${id}`)
            .then(res => setStore(res.data))
            .catch(err => console.log(err))
    }, [id])
    return (
        <div>
            <h1>Store Finder</h1>
            <a href="/"><button>Go back home</button></a>
            {
                store && 
                    <div>
                        <h2>{store.storeName}</h2>
                        <h2>Store Number {store.storeNumber}</h2>
                        {
                            store.open === 'True'?
                                <h2>Open</h2> :
                                <h2>Not Open</h2>
                        }
                        <Link to={`/store/edit/${id}`}>
                            <button>Edit Store Details</button>
                        </Link>
                    </div>
            }
        </div>
    )
}
export default Store