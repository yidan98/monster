import TodoItem from "../todo-item/todoItem.component";
import axios from "axios";
const todoUrl = axios.create({
  baseURL: "http://localhost:8080/todo",
});
const TodoList = ({ items, setTodoList }) => {
  function updateStatus(item) {
    axios
      .patch(`http://localhost:8080/todo/${item.taskId}`, {
        status: item.status === 1 ? 0 : 1,
      })
      .then((response) => {
        setTodoList(response.data.data);
      });
  }
  async function deletePost(item) {
    if (window.confirm("确认删除吗？")) {
      const response = await todoUrl.delete(`/${item.taskId}`);

      setTodoList(response.data.data);
    }
  }
  const handleClick = () => {
    items.sort((a, b) => new Date(a.date) - new Date(b.date));
    setTodoList([...items]);
    console.log("items", items);
  };
  return (
    <div className="todo-list">
      <button onClick={handleClick}>Sort by date</button>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.taskId}
            item={item}
            updateStatus={() => updateStatus(item)}
            deletePost={() => deletePost(item)}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
