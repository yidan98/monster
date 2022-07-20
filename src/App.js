import { useState, useRef, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/todo-list/todoList.component";
const App = () => {
  const taskElement = useRef();
  const dateElement = useRef();
  const monthElement = useRef();
  // let id = useRef(70);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/todo").then(({ data }) => {
      console.log(data);
      setTodos(data.data);
    });
  }, []);

  const addTask = () => {
    axios
      .post("http://localhost:8080/todo", {
        task: taskElement.current.value,
        date:
          2022 +
          "-" +
          monthElement.current.value +
          "-" +
          dateElement.current.value,
        taskId: 0,
      })
      .then((response) => {
        setTodos(response.data.data);
      });
    monthElement.current.value = "";
    dateElement.current.value = "";
    taskElement.current.value = "";
    // id.current++;
    // console.log("addId", id);
    // const task = taskElement.current.value;
    // console.log("task", taskElement.current.value);
    // const date = dateElement.current.value;
    // const month = monthElement.current.value;
    // id.current++;
    // console.log(id);
    // let newTodos = [...todos];
    // newTodos.push({ task, date, month, status: 0, id: id.current });
    // console.log("todos", newTodos);
    // setTodos(newTodos);
  };
  // const removeTask = (id) => {
  //   // axios.delete("http://localhost:8080/todo/{id}");
  //   let newTodos = [...todos];
  //   console.log("deleteId", id);
  //   const filteredTodos = newTodos.filter((todo) => todo.id !== id);
  //   setTodos(filteredTodos);
  // };

  return (
    <div className="App">
      <h1 className="app-title">Todo List</h1>
      <div>
        <input ref={taskElement} placeholder="add task" />
        <input ref={monthElement} placeholder="add month" />
        <input ref={dateElement} placeholder="add date" />
        <button onClick={addTask}>add</button>
      </div>
      {/* <button>sort by time</button> */}

      <div>
        <TodoList items={todos} setTodoList={setTodos}></TodoList>
      </div>
    </div>
  );
};

export default App;
