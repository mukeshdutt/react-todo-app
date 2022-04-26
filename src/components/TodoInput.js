import React from "react";

function TodoInput({ item, handleChange, handleAdd, isEdit }) {
  return (
    <div className="mt-5">
      <h3>Todo Input</h3>
      <div className="card">
        <div className="card-body">
          <form className="row g-2" onSubmit={handleAdd}>
            <div className="col-12">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Item Title"
                name="title"
                id="title"
                onChange={handleChange}
                value={item.title}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter the Item Description"
                rows={3}
                name="description"
                id="description"
                onChange={handleChange}
                value={item.description}
              ></textarea>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                className={isEdit ? "btn btn-danger" : "btn btn-primary"}
              >
                {isEdit ? "edit item" : "add item"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
