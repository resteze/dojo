import React, { useState } from "react"

const TodoForm = (props) => {
    const [taskname, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {taskname, done: false}
        props.onCreation(taskname);
        setTaskName('');
    }
    //ask about how to make it so there isnt a delay between items being added to the list
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input name="taskname" type='text' onChange={ (e) =>  setTaskName(e.target.value) } value={taskname} />
            </div>
            <input type='submit' value='Add' />
        </form>
    )
};
export default TodoForm;