import React, { useState } from 'react';
import { login, signup } from '../api'; // Import the login and signup functions from api.js

function HomePage() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(loginEmail, loginPassword);
      console.log(data); // Handle successful login response
      alert('Login successful');
      setError('');
    } catch (error) {
      setError(error.message); // Handle login error
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signupPassword !== confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }
    try {
      const data = await signup(signupEmail, signupPassword);
      console.log(data); // Handle successful signup response
      alert('Signup successful');
      setError('');
    } catch (error) {
      setError(error.message); // Handle signup error
    } finally {
      setLoading(false);
    }
  };

  const handleToggleForm = () => {
    // Reset all form fields when toggling between login and signup
    setLoginEmail('');
    setLoginPassword('');
    setSignupEmail('');
    setSignupPassword('');
    setConfirmPassword('');
    setError('');
    setLoading(false);

    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Welcome to Your App</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={() => setIsLogin(true)} style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: isLogin ? '#3498db' : '#2c3e50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none', transition: 'background-color 0.3s' }}>Login</button>
        <button onClick={() => setIsLogin(false)} style={{ padding: '10px 20px', backgroundColor: isLogin ? '#2c3e50' : '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none', transition: 'background-color 0.3s' }}>Signup</button>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}>
          {isLogin ? (
            <>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', transition: 'border-color 0.3s' }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', transition: 'border-color 0.3s' }}
                required
              />
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', transition: 'border-color 0.3s' }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', transition: 'border-color 0.3s' }}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ marginBottom: '20px', padding: '10px', width: '100%', border: '1px solid #ddd', borderRadius: '5px', outline: 'none', transition: 'border-color 0.3s' }}
                required
              />
            </>
          )}
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', outline: 'none', transition: 'background-color 0.3s' }}>{isLogin ? 'Login' : 'Signup'}</button>
        </form>
      </div>
      {loading && <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</p>}
    </div>
  );
}

export default HomePage;
