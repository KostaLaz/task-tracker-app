import React from 'react'
import Task from './Task'


const Tasks = ( {tasks, onDelete} ) => {

    return (
        <div>
            {tasks.map((task) => (
             <div>   
                <Task key={task.id} task={task} onDelete={onDelete}/>
            </div>
            ))}
        </div>
    )
}

export default Tasks
