import React , {useState} from 'react';
import axios from 'axios';
import DisplayPokemon from "../components/displayPokemon";

const GrabAllPokemon = () => {
    const [allPokemon, setAllPokemon] = useState()

    const catchAllPokemon = async() =>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        const jsonResponse = await response.json()
        console.log(jsonResponse)
        setAllPokemon(jsonResponse.results)
    }
    const catchAllPokemonWithAxios = async() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response=>{
            console.log(response.data.results)
            setAllPokemon(response.data.results)
        })
    }
    return(
        <div>
            <button onClick={catchAllPokemon}>Click to see all pokemon</button>
            <button onClick={catchAllPokemonWithAxios}>Click to see all pokemon but with axios</button>
            {
            allPokemon?
                <DisplayPokemon allPokemon = {allPokemon}/>:
            <h1> Press Button </h1>
            }
            
        </div>
        
    )
}
export default GrabAllPokemon;