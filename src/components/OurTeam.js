import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Loader from "../components/Loader";

const OurTeam = () => {
  const [showReviewBox, setShowReviewBox] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const team = [
    {
      name: "Sahil Jogi",
      role: "Developer of this website",
      Address: "Aaitabare",
           profilePic: "",
    },
    {
      name: "Amit katuwal",
      role: "student",
      Address: "Bargacchi",
           profilePic: "",
    },
    {
      name: "Shisir Magar",
      role: "student",
      Address: "Santi chock",
           profilePic: "",
    },
    {
      name: "Heaven Bhandari",
      role: "Assistant Developer",
      Address: "Adarsha tole",
           profilePic: "",
    },
    {
      name: "Yugal Limbu",
      role: "student",
      Address: "Sukra bare",
           profilePic: "",
    },
    {
      name: "Sushant Limbu",
      role: "student",
      Address: "Bargacchi",
           profilePic: "",
    },
    {
      name: "Rijan Limbu",
      role: "student",
      Address: "Jahada",
           profilePic: "",
    },
    {
      name: "Abish Tamang",
      role: "student",
      Address: "Aaitabare",
           profilePic: "",
    },
    {
      name: "Sanjeip Giri",
      role: "student",
      Address: "Adarsha tole",
           profilePic: "",
    },
    {
      name: "Dipsal Magar",
      role: "student",
      Address: "Aaitabare",
           profilePic: "",
    },
    {
      name: "Sanjok rai",
      role: "student",
      Address: "Galetole",
           profilePic: "",
    },
    {
      name: "Abish Tamang",
      role: "student",
      Address: "Aaitabare",
           profilePic: "",
    },
    {
      name: "Nuwakccha Rai",
      role: "student",
      Address: "Jahada",
           profilePic: "",
    },
    {
      name: "Albina Rai",
      role: "student",
      Address: "Aaitabare",
           profilePic: "",
    },
    {
      name: "Binu Magar",
      role: "student",
      Address: "Bargacchi",
           profilePic: "",
    },
    {
      name: "Rabina Timsina",
      role: "student",
      Address: "Bargacchi",
           profilePic: "",
    },
    {
      name: "Jenisha Raut",
      role: "student",
      Address: "Kanepokhari",
           profilePic: "",
    },
    {
      name: "Mahima uparkoti",
      role: "student",
      Address: "Bargacchi",
      profilePic: "",
    },
    {
      name: "Sadhana Ban",
      role: "student",
      Address: "Jahada",
      profilePic: "",
    },
  ];

  const containerStyle = {
    backgroundColor: "#00204a",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
    color: "white",
    marginTop: "50px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1.5rem",
  };

  const memberStyle = {
    backgroundColor: "#013366",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const profilePicStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid white",
    margin: "0 auto",
  };

  const memberNameStyle = {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginTop: "1rem",
  };

  const textStyle = {
    fontSize: "0.875rem",
    color: "#d1d1d1",
  };

  const reviewBoxStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "500px",
    maxHeight: "80vh",
    overflowY: "auto",
    zIndex: 1000,
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
    background: "none",
    border: "none",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Class 9 (2081)</h1>
      <div style={gridStyle}>
        {team.map((member, index) => (
          <div key={index} style={memberStyle}>
            <img
              src={member.profilePic}
              alt={member.name}
              style={profilePicStyle}
            />
            <h2 style={memberNameStyle}>{member.name}</h2>
            <p style={textStyle}>Experience: {member.experience}</p>
            <p style={textStyle}>Contact: {member.contact}</p>
          </div>
        ))}
      </div>

      {/* Review Box (Modal) */}
      {showReviewBox && (
        <div style={reviewBoxStyle}>
          <button
            style={closeButtonStyle}
            onClick={handleCloseReviewBox}
          >
            X
          </button>
          <h2>{selectedMember.name}'s Review</h2>

          {/* Review Form */}
          <div>
            <label style={{ display: "block", marginBottom: "10px" }}>
              <h5 style={{ fontWeight: "bold" }}>Your Review:</h5>
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review about the team member here...."
              rows="5"
              style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
            />
          </div>

          {/* Rating Section with Star Icons */}
          <div>
            <label style={{ display: "block", marginBottom: "10px", fontWeight: "bold" }}>
              Rating (out of 5):
            </label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} style={{ cursor: "pointer" }}>
                  <span
                    onClick={() => setRating(star)} // Update rating when clicked
                    style={{
                      fontSize: "30px",
                      color: star <= rating ? "gold" : "gray",
                    }}
                  >
                    ★
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmitReview}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#013366",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            disabled={loading} 
          >
            {loading ? <Loader /> : "Submit Review"}  {/* Show Loader if loading */}
          </button>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
