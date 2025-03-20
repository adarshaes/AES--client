import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const Signup = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    pass: "",
    category: "student",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://aes-server-beta.vercel.app/api/auth/sign", formData);
      alert("User created successfully!");
      localStorage.setItem("auth", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-lg-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="glassmorphism-card p-4">
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                
                <div className="form-outline mb-3">
                  <input 
                    type="text" 
                    name="userName" 
                    className="form-control form-control-lg" 
                    placeholder="Enter your name"
                    value={formData.userName} 
                    onChange={handleChange} 
                    required 
                  />
                  <label className="form-label">Full Name</label>
                </div>

                <div className="form-outline mb-3">
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control form-control-lg" 
                    placeholder="Enter a valid email address"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                  <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-3">
                  <input 
                    type="password" 
                    name="pass" 
                    className="form-control form-control-lg" 
                    placeholder="Enter password"
                    value={formData.pass} 
                    onChange={handleChange} 
                    required 
                  />
                  <label className="form-label">Password</label>
                </div>

                <div className="mb-3">
                  <label className="form-label">Select Category</label>
                  <select 
                    name="category" 
                    className="form-select" 
                    value={formData.category} 
                    onChange={handleChange}
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                  </select>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                    {loading ? <Loader /> : "Register"}
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Already have an account? <Link to="/log" className="link-danger">Login</Link>
                  </p>
                  <a href="/">Back</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
