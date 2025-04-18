// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../api/api";
// import "./EditCategory.css"; // Import the CSS file for styling

// const EditCategory = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });

//   // Fetch existing category details on component mount
//   useEffect(() => {
//     API.get(`/categories/${id}`)
//       .then((res) => setForm(res.data))
//       .catch((err) => {
//         console.error("Failed to fetch category data:", err);
//         alert("Error fetching category details.");
//       });
//   }, [id]);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.put(`/categories/${id}`, {
//         name: form.name,
//         itemCount: form.itemCount,
//         imageUrl: form.imageUrl,
//       });

//       alert("Category Edited Successfully");
//       navigate("/dashboard");
//     } catch (err) {
//       console.error("Failed to update category:", err);
//       alert("Error updating category.");
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Edit Category</h2>
//       <form onSubmit={handleSubmit} className="edit-category-form">
//         <input
//           type="text"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           placeholder="Category Name"
//           required
//         />
//         <input
//           type="number"
//           value={form.itemCount}
//           onChange={(e) => setForm({ ...form, itemCount: e.target.value })}
//           placeholder="Item Count"
//           required
//         />
//         <input
//           type="text"
//           value={form.imageUrl}
//           onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
//           placeholder="Image URL"
//           required
//         />
//         <button type="submit" className="submit-button">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditCategory;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditCategory.css"; // Import the CSS file for styling

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", itemCount: "", imageUrl: "" });

  // Fetch existing category details on component mount
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        const res = await fetch(
          `https://revisitecommercebackendproject.onrender.com/api/categories/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          setForm(data); // Set the fetched data to the form state
        } else {
          alert("Failed to fetch category details.");
        }
      } catch (err) {
        console.error("Failed to fetch category data:", err);
        alert("Error fetching category details.");
      }
    };

    fetchCategoryData();
  }, [id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      const res = await fetch(
        `https://revisitecommercebackendproject.onrender.com/api/categories/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`, // Attach the token in the Authorization header
          },
          body: JSON.stringify({
            name: form.name,
            itemCount: form.itemCount,
            imageUrl: form.imageUrl,
          }),
        }
      );

      if (res.ok) {
        alert("Category Edited Successfully");
        navigate("/dashboard");
      } else {
        alert("Error updating category.");
      }
    } catch (err) {
      console.error("Failed to update category:", err);
      alert("Error updating category.");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit} className="edit-category-form">
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Category Name"
          required
        />
        <input
          type="number"
          value={form.itemCount}
          onChange={(e) => setForm({ ...form, itemCount: e.target.value })}
          placeholder="Item Count"
          required
        />
        <input
          type="text"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          placeholder="Image URL"
          required
        />
        <button type="submit" className="submit-button">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
