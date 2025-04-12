import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";

function App() {
  return (
    <Routes>
      {/* Default route to display the Signup page initially */}
      <Route path="/" element={<Signup />} />{" "}
      {/* Default route for the Signup page */}
      {/* Other routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/edit-category/:id" element={<EditCategory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
