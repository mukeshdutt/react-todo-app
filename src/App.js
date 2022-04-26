import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    title: "",
    description: "",
    itemDate: "",
  });

  const handleChange = (e) => {
    const control = e.target;
    setItem({ ...item, [control.name]: control.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!item.title || !item.description) {
      alert(
        "Title & Description are mandatory fields, can not submit without these value."
      );
      return false;
    }

    // Getting the max value from the items array for uniqueness
    const maxId = Math.max(
      items.map((e) => {
        return e.id;
      })
    );

    // Setting the entire new object
    const newItem = {
      id: maxId + 1,
      title: item.title,
      description: item.description,
      itemDate: new Date().toString(),
    };
    setItems([...items, newItem]);
    setItem({ title: "", description: "", itemDate: "" });
    setIsEdit(false);
  };

  const handleEdit = (id) => {
    // Selecting & Setting the existing values
    const selected = items.find((tt) => tt.id === id);
    setItem({
      title: selected.title,
      description: selected.description,
      itemDate: selected.itemDate,
    });

    // Setting the state without current selected value
    const newItems = items.filter((tt) => tt.id !== id);
    setItems(newItems);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this item?")) {
      const newItems = items.filter((tt) => tt.id !== id);
      setItems(newItems);
      setIsEdit(false);
    }
  };

  return (
    <div className="container">
      <TodoInput
        handleAdd={handleAdd}
        isEdit={isEdit}
        handleChange={handleChange}
        item={item}
      />
      <TodoList
        items={items}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
