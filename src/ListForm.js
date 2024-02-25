import {useState} from "react";

function ListForm({handleNewTask}){

const [newTask, setNewTask] = useState("")    

function handleSubmit(event){
    event.preventDefault();
    const formData = { 
      task: newTask
    }
    fetch("http://localhost:3000/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((newItem) => handleNewTask(newItem));
}

return(
    <div>
        <h2>Add a New Task</h2>
        <form className='formClass' onSubmit={handleSubmit}>
            <label>New Task:</label>
            <input 
            type="text"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            />
            <button>Add Task</button>
        </form>
    </div>
);

}

export default ListForm;