const TodoItem = ({ item, updateStatus, deletePost }) => {
  const { task, date, status } = item;
  return (
    <div className="todo-item">
      <div className="item-content">
        <p style={{ textDecoration: status !== 1 ? "line-through" : "none" }}>
          {task}
        </p>
        <span>{date}</span>
      </div>
      <div className="todo-button">
        <button onClick={() => updateStatus(item)}>toggle</button>
        <button onClick={() => deletePost(item)}>remove</button>
      </div>
    </div>
  );
};

// <span>(id:{taskId})</span>
// <span>(status:{status})</span>

export default TodoItem;
