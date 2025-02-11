import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTaskAction, editTaskAction, deleteTaskAction, toggleTaskAction } from "../../redux/actions/actions"
import TaskList from "../../components/taskList/TaskList"
import classes from "./TaskPage.module.css"

const TasksPage = () => {
    const { tasks } = useSelector(state => state.taskReducer)
    const dispatch = useDispatch()

    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const handleChange = (event) => {
        setTask({
            ...task,
            [event.target.name]: event.target.value
        })
    }

    const handleAddTask = (event) => {
        event.preventDefault()
        if (!task.title || !task.description) alert('Please fill in all fields')
        else dispatch(addTaskAction(task))
    }

    const handleEditTask = (editTask) => {
        dispatch(editTaskAction(editTask))
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTaskAction(id))
    }

    const toggleTask = (task) => {
        const updatedTask = { ...task, isCompleted: !task.isCompleted }
        dispatch(toggleTaskAction(updatedTask))
    }

    return (
        <>
            <div>
                <form onSubmit={handleAddTask} className={classes.form}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={task.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={task.description}
                        onChange={handleChange}
                    />
                    <button type="submit">Add Task</button>
                </form>

                <div className={classes.taskList}>
                    {tasks && tasks.length > 0 ? (
                        tasks.map((task, key) => (
                            <TaskList
                                key={key}
                                task={task}
                                handleEditTask={handleEditTask}
                                handleDeleteTask={handleDeleteTask}
                                toggleTask={toggleTask}
                            />
                        ))
                    ) : (
                        <p>No tasks available</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default TasksPage