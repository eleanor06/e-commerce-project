// src/pages/Profile.jsx
import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  // Fake profile data (you can make it dynamic later)
  const user = {
    name: "student",
    email: "student@example.com",
    location: "Algeria",
    memberSince: "april 2025"
  };

  return (
    <div className="profile-page">
      <h1>My Profile</h1>
      <div className="profile-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Member Since:</strong> {user.memberSince}</p>
      </div>
    </div>
  );
};

export default Profile;
