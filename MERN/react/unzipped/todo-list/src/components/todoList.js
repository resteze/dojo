import React from "react";

function TodoList(props) {
    const handleDelete = (e) => {
        console.log(e)
        const newList = props.savedList.filter((eachTask, i) => i !== e)
        console.log(newList)
        props.onUpdate(newList)
    }

    const handleUpdate = (e, i) => {
        const listToUpdate = [...props.TodoList]
        listToUpdate[i].isUrgent = e.target.checked
        console.log(listToUpdate)
        props.onUpdate(listToUpdate)
    }
    return (
        <div>
            <h1>Todo List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>Done?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.savedList.map((eachTask, i)=>(
                            <tr key={i}>
                                <td>{eachTask}</td>
                                <td><input type='checkbox' checked = {eachTask.done} onChange={e => handleUpdate(e, i)}/></td>
                                <td> <button onClick={e=>handleDelete(i)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default TodoList;