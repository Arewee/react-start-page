import React, { useEffect, useState } from "react";

function Todo() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodo([...todo, task]);
    setNewTask("");
  }

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function deleteTodo(id) {
    setTodo(todo.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div>
      <input
        onChange={handleChange}
        value={newTask}
        className="text-black rounded-sm placeholder: pl-2"
        placeholder="Ny todo:"
      />
      <button
        onClick={addTask}
        className="ml-5 p-2 w-10 bg-transparent border border-slate-500 rounded-full hover:bg-slate-900"
      >
        +
      </button>
      <h3 className="mt-10">Todo List:</h3>
      <div>
        <ul className="m-2 p-2">
          {todo.map((task) => (
            <li
              className={
                task.completed
                  ? "text-green-600 ml-2 mt-2"
                  : "text: inherit ml-2 mt-2"
              }
              key={task.id}
              value={task}
            >
              {task.completed ? "✌🏻 " : "👉🏻 "}
              {task.taskName}
              <button
                className="ml-5 w-7 bg-transparent border border-slate-500 rounded-md hover:bg-slate-900 text-green-600"
                onClick={() => completeTask(task.id)}
              >
                ✓
              </button>
              <button
                className=" ml-5 w-7 bg-transparent border border-slate-500 rounded-full hover:bg-slate-900 text-red-600"
                onClick={() => deleteTodo(task.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
