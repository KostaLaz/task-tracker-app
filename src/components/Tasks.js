import React from 'react'
import Task from './Task'


const Tasks = ( {tasks, onDelete, onToggle} ) => {

    return (
        <div>
            {tasks.map((task) => (
             <div >   
                <Task key={task.id} task={task} onDelete={onDelete}
                onToggle={onToggle} />
            </div>
            ))}
        </div>
    )
}

export default Tasks
