import { useState } from "react";

function App() {
  const [task, settask] = useState("");  
  const [tasks, setTasks] = useState([]);

  const AddTask = () => {
    if (task.trim() !== "") {
      setTasks((prevItems) => [...prevItems, task]);
      settask(""); 
    }
  };

  const removeTask = (index) => {
    setTasks((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col p-10 absolute gap-10">
      <div className="items-center relative left-150">
        <h1 className="text-5xl font-medium">TODO LIST</h1>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <input
            id="text"
            placeholder="add item..."
            className="border-2 w-96 h-10 border-gray-400 rounded-md pl-3"
            value={task}
            onChange={(e) => settask(e.target.value)} 
          />
        </div>
        <button
          className="w-14 border-1 rounded-sm bg-black text-white pl-2 pr-2 pt-1 pb-1 cursor-pointer"
          onClick={AddTask}
        >
          ADD
        </button>
      </div>
      <div className="mt-5">
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{task}</span>
              <button
                className="text-red-500 ml-4"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
