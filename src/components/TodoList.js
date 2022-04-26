import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, handleEdit, handleDelete }) {
  return (
    <div className="mt-5 mb-5">
      {items.length > 0 && <h3>ToItem List</h3>}
      {items.length > 0 &&
        items.map((item) => {
          return (
            <TodoItem
              item={item}
              key={item.id}
              handleEdit={() => {
                handleEdit(item.id);
              }}
              handleDelete={() => {
                handleDelete(item.id);
              }}
            />
          );
        })}
    </div>
  );
}

export default TodoList;
