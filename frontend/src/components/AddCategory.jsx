import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import "./AddCategory.css"; // Import the CSS file for styling

const AddCategory = () => {
  const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/categories", form);
    alert("Category Added Successfully");
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit} className="add-category-form">
        <input
          type="text"
          placeholder="Category Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Item Count"
          onChange={(e) => setForm({ ...form, itemCount: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          required
        />
        <button type="submit" className="submit-button">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
