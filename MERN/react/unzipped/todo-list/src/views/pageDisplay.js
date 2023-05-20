import React, { useState } from "react";
import TodoForm from "../components/todoForm";
import TodoList from "../components/todoList";

function PageDisplay() {
    const [taskList, setTaskList] = useState([]);

    const addTasktoList = (newTask) => {
        setTaskList([...taskList, newTask]);
    }
    const updateList = (updatedList) => {
        setTaskList(updatedList);
    }
    return (
        <div>
            <TodoForm onCreation = {addTasktoList} />
            <TodoList savedList = {taskList} onUpdate = {updateList} />
        </div>
    )
};
export default PageDisplay;