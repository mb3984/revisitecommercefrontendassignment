// import React, { useState } from "react";
// import API from "../api/api";
// import { useNavigate } from "react-router-dom";
// import "./AddCategory.css"; // Import the CSS file for styling

// const AddCategory = () => {
//   const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await API.post("/categories/", form);
//     alert("Category Added Successfully");
//     navigate("/dashboard");
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Category</h2>
//       <form onSubmit={handleSubmit} className="add-category-form">
//         <input
//           type="text"
//           placeholder="Category Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Item Count"
//           onChange={(e) => setForm({ ...form, itemCount: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
//           required
//         />
//         <button type="submit" className="submit-button">
//           Add Category
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCategory;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AddCategory.css"; // Import the CSS file for styling

// const AddCategory = () => {
//   const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token"); // Retrieve token from localStorage

//       const res = await fetch(
//         "https://revisitecommercebackendproject.onrender.com/api/categories/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`, // Attach the token in the Authorization header
//           },
//           body: JSON.stringify(form), // Send the form data as JSON
//         }
//       );

//       if (res.ok) {
//         alert("Category Added Successfully");
//         navigate("/dashboard"); // Redirect to the dashboard upon success
//       } else {
//         alert("Failed to add category");
//       }
//     } catch (err) {
//       alert("An error occurred. Please try again.");
//       console.log(err);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add Category</h2>
//       <form onSubmit={handleSubmit} className="add-category-form">
//         <input
//           type="text"
//           placeholder="Category Name"
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Item Count"
//           onChange={(e) => setForm({ ...form, itemCount: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
//           required
//         />
//         <button type="submit" className="submit-button">
//           Add Category
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddCategory;

import React, { useState } from "react";
import "./AddCategory.css";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  console.log("Rendering AddCategory Page"); // Log to confirm rendering
  const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      const res = await fetch(
        "https://revisitecommercebackendproject.onrender.com/api/categories/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Attach the token in the Authorization header
          },
          body: JSON.stringify(form), // Send the form data as JSON
        }
      );

      if (res.ok) {
        alert("Category Added Successfully");
        navigate("/dashboard"); // Redirect to the dashboard upon success
      } else {
        alert("Failed to add category");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
      console.log(err);
    }
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
