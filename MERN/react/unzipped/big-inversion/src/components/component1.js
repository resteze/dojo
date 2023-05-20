import React, { Component, useState } from 'react'

const PersonCard = props => {
    const [state, setState] = useState({
        age: props.age
    })
    const birthdayBtn = e => {
        console.log(state)
        setState({
            age: state.age + 1
        })
    }
    return(
        <div>
            <h1> {props.lastName}, {props.firstName} </h1>
            <p> Age: {state.age } </p>
            <p> Hair Color: { props.hairColor } </p>
            <button onClick={birthdayBtn}>Birthday Button</button>
        </div>
    );
}
export default PersonCard;