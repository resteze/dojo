import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const DisplayPeople = () => {
    const { id } = useParams()
    const [person, setPerson] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response.data)
                setPerson(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                person ?
                    <div>
                        <h1>{person.name}</h1>
                        <h3>Height: {person.height}</h3>
                        <h3>Mass:{person.mass}</h3>
                        <h3>Hair Color:{person.hair_color}</h3>
                        <h3>Skin Color:{person.skin_color}</h3>
                    </div> :
                    <div>
                        <h1>These aren't the droids you're looking for</h1>
                        <img src='https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg' />
                    </div>
            }
        </div>

    )
}
export default DisplayPeople;