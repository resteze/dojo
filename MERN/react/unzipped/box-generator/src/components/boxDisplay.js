import React from "react";


function BoxDisplay(props) {
    return (
        <div>
            <div>
                <h1>Newest Box</h1>
                <div>
                    {props.createdBox }
                </div>
                <h1>Box List</h1>
                {props.savedBoxes.map((eachBox, i) => <div key={i} style={{ display:'inline-flex', height: '100px', width: '100px', backgroundColor: eachBox, margin: '10px'}}> {eachBox} </div>)}
            </div>
        </div>
    );
}

export default BoxDisplay