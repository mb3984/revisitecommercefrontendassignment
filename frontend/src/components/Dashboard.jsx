import React from "react";
import CategoryList from "./CategoryList";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <a href="/add-category" className="add-category-link">
        Add Category
      </a>
      <CategoryList />
    </div>
  );
};

export default Dashboard;
