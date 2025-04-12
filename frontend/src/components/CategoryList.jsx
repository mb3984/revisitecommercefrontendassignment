// import React, { useEffect, useState } from "react";
// import API from "../api/api";
// import { Link } from "react-router-dom";
// import "./CategoryList.css"; // Import the CSS file for styling

// const CategoryList = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     API.get("/categories").then((res) => setCategories(res.data));
//   }, []);

//   return (
//     <div className="category-list-container">
//       <h2>Category List</h2>
//       <div className="grid">
//         {categories.map((cat) => (
//           <div key={cat._id} className="card">
//             <img src={cat.imageUrl} alt={cat.name} className="category-image" />
//             <h3>{cat.name}</h3>
//             <p>Items: {cat.itemCount}</p>
//             <Link to={`/edit-category/${cat._id}`} className="edit-link">
//               Edit
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryList.css"; // Import the CSS file for styling

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        const res = await fetch(
          "https://revisitecommercebackendproject.onrender.com/api/categories/",
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
          setCategories(data); // Set the fetched categories data to state
        } else {
          alert("Failed to fetch categories.");
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        alert("Error fetching categories.");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-list-container">
      <h2>Category List</h2>
      <div className="grid">
        {categories.map((cat) => (
          <div key={cat._id} className="card">
            <img src={cat.imageUrl} alt={cat.name} className="category-image" />
            <h3>{cat.name}</h3>
            <p>Items: {cat.itemCount}</p>
            <Link to={`/edit-category/${cat._id}`} className="edit-link">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
