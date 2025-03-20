import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const navigate = useNavigate();

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async () => {
    if (feedback.length < 10 || feedback.length > 150) {
      alert("Feedback must be between 10 and 150 characters.");
      return;
    }

    const token = localStorage.getItem("auth");

    if (!token) {
      alert("You need to be logged in to submit feedback.");
      navigate("/reg");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      await axios.post(
        "https://aes-server-beta.vercel.app/api/feed",
        { data: feedback },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFeedback("");
      }, 3000);
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <section id="section3" style={styles.section}>
      {/* Left Side - Feedback Box */}
      <div style={styles.leftContainer}>
        <h2 style={styles.heading}>Our Services</h2>
        <p style={styles.description}>Write your feedback in the box below!</p>
        <div style={styles.feedbackBox}>
          <textarea
            style={styles.textarea}
            placeholder="Write your suggestion or complaint..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            maxLength={150}
            disabled={isLoading} // Disable textarea when submitting
          />
          <button
            style={styles.submitBtn}
            onClick={handleSubmit}
            disabled={isLoading} // Disable button when submitting
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
        {submitted && (
          <p style={styles.successMessage}>✅ Feedback Submitted Successfully!</p>
        )}
      </div>

      {/* Right Side - Student Image */}
      {windowWidth > 768 && ( // Hide image on small screens
        <div style={styles.rightContainer}>
          <img
            src="https://th.bing.com/th/id/OIP.A7v8KyOtuAULCH1TgShRmwHaHa?rs=1&pid=ImgDetMain"
            alt="Student"
            style={styles.studentImage}
          />
        </div>
      )}
    </section>
  );
};

// Inline Styles
const styles = {
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    background: "#f4f4f9",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    maxWidth: "1000px",
    margin: "auto",
    marginTop: "50px",
  },
  leftContainer: {
    flex: 1,
    textAlign: "left",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#555",
  },
  feedbackBox: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "16px",
    resize: "none",
    outline: "none",
  },
  submitBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s",
  },
  successMessage: {
    marginTop: "15px",
    padding: "10px",
    background: "#28a745",
    color: "white",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
  },
  rightContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  studentImage: {
    width: "300px",
    height: "350px",
    objectFit: "cover",
    borderRadius: "10px",
    filter: "drop-shadow(5px 5px 15px rgba(0,0,0,0.2))",
    mixBlendMode: "multiply",
  },
};

export default Services;
