import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [subject, setSubject] = useState('')
    const [id, setId] = useState()
    //creates the search variable

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${subject}/${id}`)
    }
    //sets the state and redirects
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                        <label>Search For:</label>
                        <select name="subject" value={subject} onChange={e => setSubject(e.target.value)}>
                            <option value='planets'>Planets</option>
                            <option value='people'>People</option>
                        </select>
                        <label>Id:</label>
                        <input type='number' name='id' value={id} onChange={e => setId(e.target.value)}></input>
                        <input type='submit'></input>
                </form >
            </div>
            
        </div >



    )
}
export default Search;