import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditStore = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [storeName, setStoreName] = useState('')
    const [storeNumber, setStoreNumber] = useState('')
    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/store/${id}/`)
            .then(res => {
                const store = res.data
                setStoreName(store.storeName)
                setStoreNumber(store.storeNumber)
                setOpen(store.open)
            })
    }, [id])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/store/edit/${id}`, { storeName, storeNumber, open })
            .then(res => navigate(`/store/${id}`))
            .catch(err => {
                const errorResponse = err.res.data.errors;
                const errArr = []
                for (const key of Object.keys(errorResponse)) {
                    errArr.push(errorResponse[key].message)
                }
                setErrors(errArr)
            })
    }
    return (
        <div>
            <div>
                <h1>Store Finder</h1>
                <a href="/"><button>Go back home</button></a>
            </div>
            <h4>Edit this store!</h4>
            <form onSubmit={handleSubmit}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <label for='name'>Store Name</label>
                <input type='text' name="name" value={storeName} onChange={(e) => { setStoreName(e.target.value) }} />
                <label form="number">Store Number</label>
                <input type='number' name='number' value={storeNumber} onChange={(e) => { setStoreNumber(e.target.value) }} />
                <label for='open'>Open?</label>
                <input type='checkbox' name="open" checked value={true} onChange={(e) => { setOpen(e.target.value) }} />
                <input type='submit' value='Edit Store' />
            </form>
        </div>
    )
}
export default EditStore