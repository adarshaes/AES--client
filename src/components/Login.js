import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader'; // Import the Loader component

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loader state

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Show loader
    
    try {
      const response = await axios.post('https://aes-server-beta.vercel.app/api/auth/login', { email, password });
      localStorage.setItem('auth', response.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false); // Hide loader after request completion
    }
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
              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-lg" placeholder="Enter a valid email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label className="form-label">Email address</label>
                </div>
                <div className="form-outline mb-3">
                  <input type="password" className="form-control form-control-lg" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <label className="form-label">Password</label>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                    {loading ? <Loader /> : 'Login'}
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account? <Link to="/reg" className="link-danger">Register</Link>
                  </p>
                  <a href='/'>Back</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
