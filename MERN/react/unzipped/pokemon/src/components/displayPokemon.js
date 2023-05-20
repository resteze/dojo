import React from 'react';

const DisplayPokemon = (props) => {
    return (
        <div>
            <ul>
                {props.allPokemon.map((eachPokemon, i) => <li key = {i}> {eachPokemon.name} </li>)}
            </ul>
        </div>
    )
}
export default DisplayPokemon;