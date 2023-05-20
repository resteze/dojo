import React, { useState } from "react";
import BoxDisplay from "../components/boxDisplay";
import ColorInput from "../components/colorInput";

function PageDisplay() {
    const [currentBox, setCurrentBox] = useState('');
    const [boxList, setBoxList] = useState([])

    const createBox = (newBox) => {
        setCurrentBox(newBox);
        setBoxList([...boxList, currentBox])
    }

    return(
        <div>
            <ColorInput onCreation = {createBox}/>
            <BoxDisplay createdBox = {currentBox} savedBoxes = {boxList}/>
        </div>
    )
}
export default PageDisplay;