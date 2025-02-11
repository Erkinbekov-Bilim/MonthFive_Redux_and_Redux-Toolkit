import { useState } from "react"
import classes from "./TaskList.module.css"

const TaskList = ({ task, handleDeleteTask ,handleEditTask, toggleTask }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [input, setInput] = useState({
        title: task.title,
        description: task.description
    })

    const handleEdit = (event) => {
        event.preventDefault()
        handleEditTask({ ...task, ...input })
        setIsEditing(false)
    };

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    console.log(isEditing)

    if (isEditing) {
        return (
            <form onSubmit={handleEdit} className={classes.form}>
                <input
                    type="text"
                    value={input.title}
                    name="title"
                    onChange={handleChange}
                />
                <input type="text"
                    value={input.description}
                    name="description"
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        )
    }

    return (
        <>
            <div className={`${classes.taskList} ${task.isCompleted && classes.isCompleted}`}>
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => toggleTask(task)}
                />
                <div className={classes.info}>
                    <p>{task.title}</p>
                    <hr />
                    <p>{task.description}</p>
                </div>

                <div className={classes.actions}>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TaskList
