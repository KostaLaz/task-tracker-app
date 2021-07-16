import React from 'react'



const Tasks = ( {tasks} ) => {

    return (
        <div>
            {tasks.map((task) => (
             <div>   
                <h3 key={task.id}>{task.text}</h3>
            </div>
            ))}
        </div>
    )
}

export default Tasks
