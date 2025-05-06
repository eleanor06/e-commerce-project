// src/pages/Profile.jsx
import React from "react";
import "../styles/Profile.css";
import Navbar from "../components/Navbar";
const Profile = () => {
  // Fake profile data
  const user = {
    name: "student",
    email: "student@example.com",
    location: "Algeria",
    memberSince: "april 2025"
  };

  return (
  <>
      
    <div className="profile-page">
    <Navbar />
       <h1 className="profile-disp">My Profile</h1>
       <div className="profile-card">
  <div className="id-left">
    <img src="Default avatar icon vector of social media user.png" className="id-image" alt="ID" />
  </div>
  <div className="id-right">
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Location:</strong> {user.location}</p>
    <p><strong>Member Since:</strong> {user.memberSince}</p>
  </div>
</div>

    </div>
    </>
  );
};

export default Profile;
