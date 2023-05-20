import React, { useState } from "react"

const ColorInput = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onCreation(color);
        setColor('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color</label>
                <input type="text" onChange={ (e) => setColor(e.target.value) } value = {color} />
            </div>
            <input type='submit' value='Add'/>
        </form>
    )
}

export default ColorInput;