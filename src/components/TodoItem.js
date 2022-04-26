import React from "react";

function TodoItem({ item, handleEdit, handleDelete }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="card-title fw-bold">{item.title}</div>
        <p>{item.description}</p>
        <div className="text-end">
          <span className="me-2">{item.itemDate}</span>
          <button className="btn btn-warning ms-2" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger ms-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
