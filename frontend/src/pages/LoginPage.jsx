import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, REGISTER_USER } from '../graphql/mutations';

function LoginPage() {
  // State for login and registration forms
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', email: '', password: '' });

  // GraphQL mutations for login and registration
  const [login] = useMutation(LOGIN_USER);
  const [register] = useMutation(REGISTER_USER);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: loginForm });
      localStorage.setItem('token', data.login.token); // Store JWT token
      // Redirect user or update UI based on successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({ variables: registerForm });
      localStorage.setItem('token', data.register.token); // Store JWT token
      // Redirect user or update UI based on successful registration
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={loginForm.email}
          onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>

      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={registerForm.username}
          onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={registerForm.email}
          onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={registerForm.password}
          onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LoginPage;
