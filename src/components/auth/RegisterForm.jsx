import React from 'react';
import { Link } from 'react-router-dom';
import { brandAssets } from '../../data/products.js';

export default function RegisterForm() {
  return <section className="auth-page"><div className="auth-card"><img src={brandAssets.blackLogo} alt="Avenlora" /><h1>Register</h1><p>Create your Avenlora account.</p><form><input placeholder="Full name" /><input placeholder="Email address" /><input type="password" placeholder="Password" /><button className="primary-btn full">Create Account</button><p>Already have account? <Link to="/auth/login">Login</Link></p></form></div></section>;
}
