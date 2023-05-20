import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddStore = (props) => {
    const { id } = useParams()
    const [storeName, setStoreName] = useState('')
    const [storeNumber, setStoreNumber] = useState('')
    const [open, setOpen] = useState('False')
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/store/add', { storeName, storeNumber, open })
            .then(res => navigate(`/store/${res.data._id}`))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(err)
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
            <h4>Add a new store!</h4>
            <form onSubmit={handleSubmit}>
                {errors.map((err, i) => <p key={i}>{err}</p>)}
                <label htmlFor='name'>Store Name</label>
                <input type='text' name="name" value={storeName} onChange={(e) => { setStoreName(e.target.value) }} />
                <label htmlFor="number">Store Number</label>
                <input type='number' name='number' value={storeNumber} onChange={(e) => { setStoreNumber(e.target.value) }} />
                <label htmlFor='open'>Open?</label>
                <input type='checkbox' name="open" value={'True'} onChange={(e) => { setOpen(e.target.value) }} />
                <input type='submit' value='Add a new Store' />
            </form>
        </div>
    )
}
export default AddStore