import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const DisplayPlanets = () => {
    const { id } = useParams()
    const [planet, setPlanet] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planet ?
                    <div>
                        <h1>{planet.name}</h1>
                        <h3>Climate:{planet.climate}</h3>
                        <h3>Terrain:{planet.terrain}</h3>
                        <h3>Surface Water:{planet.surface_water} </h3>
                        <h3>Population::{planet.population}</h3>
                    </div> :
                    <div>
                        <h1>These aren't the droids you're looking for</h1>
                        <img src='https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg' />
                    </div>
            }
        </div>
    )
}
export default DisplayPlanets;