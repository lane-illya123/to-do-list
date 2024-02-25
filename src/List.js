import {useState, useEffect} from 'react'
import Tasks from "./Tasks"
import ListForm from "./ListForm"

function List(){
  
  const [task, setTask] = useState([])

    useEffect(() =>{
    fetch("http://localhost:3000/list")
      .then(r => r.json())
      .then(data => setTask(data))
      .catch(error => console.error(error));
  }, []);

  function handleNewTask(newItem) {
    setTask([...task, newItem]);
  }

  function handleDeleteTask(deletedItem) {
    const updatedItems = task.filter((item) => item.id !== deletedItem.id);
    setTask(updatedItems);
  }

return(
  <div>
      {task.map((item) => (
  <Tasks key={item.id} item={item} onDeleteTask={handleDeleteTask} />
))}
      <ListForm handleNewTask={handleNewTask}/>
    </div>
);

}

export default List;