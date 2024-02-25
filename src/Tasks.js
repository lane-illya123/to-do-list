import React from "react";

function Tasks({item, onDeleteTask}){

    function handleDeleteTask() {
        fetch(`http://localhost:3000/list/${item.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteTask(item));
      };


return(
<div>
    <h3>{item.id}</h3>
    <p>{item.task}</p>
    <button onClick={handleDeleteTask}>Delete Task</button>
</div>
);    
}

export default Tasks;